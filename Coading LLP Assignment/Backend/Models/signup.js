const mongoose = require("mongoose");

const signUpSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    mobile: {
        type : String,
        required : true
    },
    email: { 
        type : String,
        required: true
    },
    password : {
        type : String,
        required : true
    },
    isActive : {
        type : Boolean,
        required : true
    },
    createdBy : {
        type : String,
        required : true
    },
    createdOn : {
        type : String,
        required : true
    },
    updatedBy : {
        type : String
    },
    updatedOn : {
        type : String 
    }
});

const SignUpSchema = new mongoose.model('signup', signUpSchema);

module.exports = SignUpSchema;