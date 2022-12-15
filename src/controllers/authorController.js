const authorModel = require("../models/authorModel");
const jwt = require("jsonwebtoken")

const createAuthor = async (req, res) => {
  try {

    const data = req.body
    const { title, firstName, lastName, email, password } = data
    if (!firstName || !email || !password || !title)
      return res.status(400).send({ status: false, message: "name,email,passwords are a required field" });

    const findAuthor = await authorModel.findOne({ email: email })
    if (findAuthor){
    console.log(findAuthor.email)
      return res.status(409).send({ status: false, message: `${email} already exists` });
    }
    const savedData = await authorModel.create(data);

    return res.status(200).send({ status: true, message: savedData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};
module.exports.createAuthor = createAuthor;




//===================================================Phase-2============================================================

const login = async function (req, res) {
  try {
    let data = req.body
    let { email, password } = data

    if (!email)
      return res.status(404).send({ status: false, msg: "email id is missing" })

    if (!password)
      return res.status(404).send({ status: false, msg: "password is missing" })

    let mailId = await authorModel.findOne({ email: email, password: password })
    if (!mailId)
      return res.status(404).send({ status: false, msg: "mail or passsword is wrong" })



    // let passkey = await authorModel.findOne({email:email, password:password})
    // if(!passkey.password)
    // return res.status(404).send({status:false,msg:"invalid password"})

    //let author = await authorModel.findOne({email : email, password:password})
    let token = jwt.sign({
      author_Id: mailId._id.toString()
    }, "project-one");

    res.setHeader("x-api-key", token);
    res.status(200).send({ status: true, data: token });

  }
  catch (err) {
    console.log(err.message)
    res.status(500).send({ error: err.message })

  }
}
module.exports.login = login