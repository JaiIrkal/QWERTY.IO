const mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
    },
    subject:{
        type: String,
        required: true,
    },
    query:{
        type: String,
        required: true
    }
})



const userDB = mongoose.model('contact', schema);

module.exports = userDB;