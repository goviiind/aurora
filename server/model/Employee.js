const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
    name : {
        type : String,
        require  : true
    },
    email : {
        type : String,
        require  : true,
        unique : true,
    }, 
    contact : {
        type : String,
        require  : true
    },
    city : {
        type : String,
        require  : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = Employee = mongoose.model("employee" , empSchema)