const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    activeSessions: {
        type: [String],
        default: [],
      },
    isVerified:{
        type:Boolean,
        default:false
    },
    VerficationCode:{
        type:String,
    },
    VerificationCodeExpires:{
        type:Date
    },
    ForgetPasswordCode:{
        type:String,
    },
    ForgetPasswordCodeExpires:{
        type:Date
    }
});
const model = mongoose.model("user", userSchema)

module.exports = model;