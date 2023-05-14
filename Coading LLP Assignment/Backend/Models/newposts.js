const mongoose = require("mongoose");

const newPostSchema = mongoose.Schema({
    postTitle : {
        type : String,
        required : true
    },
    postBody: {
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

const newpostSchema = new mongoose.model('newpost', newPostSchema);

module.exports = newpostSchema;