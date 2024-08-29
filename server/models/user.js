const mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = new Schema(
    {
        name : {
            type:String,
            required:true
        },
        username : {
            type : String,
            required : true
        },
        pass : {
            type : String,
            required : true
        },
        date : {
            type : Date,
            default : Date.now
        },
    },
    {
        versionKey : false 
    },
    {
        collection : "users"
    }
)

module.exports = mongoose.model("User",userSchema)