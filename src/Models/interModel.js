const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId


const internSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String, unique: true, validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/.test(v)

            },
            message: props => `${props.value} is not a valid email address........`
        },
        required: [true, 'user email must be required']
    },



    mobile: {
        type: Number, unique: true,
        validate: {
            validator: function (v) {
                return /^\(?([6-9]{1})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/.test(v)
            },
            message: props => `${props.value} is not a valid indian mobile number.....`
        },
        required: [true, 'user mobile number must be required']
    },


    collegeId: {
        type: ObjectId, required: true,
        ref: "College"
    },
    isDeleted: {
        type: Boolean, default: false
    }

}, { timestamps: true })

module.exports = mongoose.model("Intern", internSchema)