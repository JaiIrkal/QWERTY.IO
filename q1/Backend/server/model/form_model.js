const mongoose = require('mongoose')
var num;
var form_schema = {

    name:{
        type:String,
        required:true
    },
    usn:{
        type:String,
        required:true,
        unique:true
    },
    event:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phno:{
        type:Number,
        required:true,
        unique: true
    },
    branch:{
        type:Array,
        required:true
    },
    semester:{
        type:String,
        required:true
    },
    gender:{
        type:Boolean,
        required:true
    },
    localite:{
        type:Boolean,
        required:true,
        default:"yes"
    },
    Laptop:{
        type:Boolean,
        required:true,
        default:"yes"
    },
}

const formDB = mongoose.model('form', form_schema);

module.exports = formDB;