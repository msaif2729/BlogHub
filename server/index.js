const connectToMongoDB = require("./db.js")
const express = require("express")
const cors = require("cors")

//Establishing Connection to MongoDB
connectToMongoDB()

const app = express()

app.use(cors())
app.use(express.json())
