require("dotenv").config()

const API_PORT = process.env.API_PORT
const MONGO_URL = process.env.MONGO_URL
const JWT_SECRET = process.env.JWT_SECRET

module.exports={
    API_PORT,
    MONGO_URL,
    JWT_SECRET
}