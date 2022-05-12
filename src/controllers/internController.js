
const interModel = require("../Models/interModel")
const collegeModel = require("../Models/collegeModel")


const createIntern = async function (req, res) {

    try {
        
        let data = req.body
        const { name, mobile, isDeleted, email, collegeName } = data
        if (!name) return res.status(400).send({ status: false, msg: "Name is required..................." })
        if (!mobile) return res.status(400).send({ status: false, msg: "mobile is required..................." })
        if (!email) return res.status(400).send({ status: false, msg: "email is required..................." })
        if (!data.collegeName) return res.status(400).send({ status: false, msg: "collegeName is required..................." })

        let findCollege = await collegeModel.findOne({ name: data.collegeName }).select({ _id: 1 })
        if (!findCollege) return res.status(400).send({ status: false, msg: "Enter a valid college name" })
        data.collegeId = findCollege._id
        delete data.collegeName

        let savedCollege = await interModel.create(data)

        return res.status(201).send({ status: true, msg: savedCollege })

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ msg: error.message })

    }
}


module.exports.createIntern = createIntern

