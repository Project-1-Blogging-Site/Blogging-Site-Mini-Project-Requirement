const interModel = require("../Models/interModel")
const collegeModel = require("../Models/collegeModel")

const createCollege = async function (req, res) {

    try {
        let data = req.body
        const { name, fullName, isDeleted, logoLink } = data
        if (!name) return res.status(400).send({ status: false, msg: "Name is required..................." })
        if (!fullName) return res.status(400).send({ status: false, msg: "FullName is required..................." })
        if (!logoLink) return res.status(400).send({ status: false, msg: "LogoLink is required..................." })
        let savedCollege = await collegeModel.create(data)
        return res.status(201).send({ status: true, msg: savedCollege })

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ msg: error.message })

    }
}

module.exports.createCollege = createCollege


const getInter = async function (req, res) {
    try {

        

        let collegeName= req.query.collegeName                                                                    //.search(/i)
        if (!collegeName) return res.status(400).send({ msg: "please enter college name" })

        let savedCollege = await collegeModel.findOne({ name: collegeName }).select({ isDeleted: 0, createdAt: 0, updatedAt: 0, __v: 0, _id: 1 })


        if (!savedCollege == true) return res.status(404).send({ msg: "No college found " })

        let collegeId = savedCollege._id

        const savedIntern = await interModel.find({ collegeId: collegeId }).select({ isDeleted: 0, createdAt: 0, updatedAt: 0, __v: 0, collegeId: 0 })

        // savedCollege["Interests"] = savedIntern
        //let obj = {...savedCollege,interests:savedIntern}
        //--------------------------------------------------
        // if (!savedIntern.length == true) {
        //     Data = {
        //         name: savedCollege.name,
        //         fullName: savedCollege.fullName,
        //         logoLink: savedCollege.logoLink,
        //         interests: "no one has applied in this college"
        //     }
        //     return res.status(200).send({ data: Data })
        // } else {
        //     Data = {
        //         name: savedCollege.name,
        //         fullName: savedCollege.fullName,
        //         logoLink: savedCollege.logoLink,
        //         interests: savedIntern
        //     }
        //     return res.status(200).send({ data: Data })
        // }

        let Data = {
                    name: savedCollege.name,
                    fullName: savedCollege.fullName,
                    logoLink: savedCollege.logoLink,
                    interests: savedIntern.length>0?savedIntern:"no interns has applied in this college"
                }
                return res.status(201).send({ data: Data })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ status: false, msg: error.message })
    }
}




module.exports.getInter = getInter