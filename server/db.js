const mongoose = require("mongoose")
const {MONGO_URL} = require('./config/config')

const connectToMongoDB = ()=>{
    mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((er)=>{
        console.log(er.message)
    })
}

module.exports = connectToMongoDB