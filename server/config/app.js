const express = require("express");
const cors = require("cors");
const loginRouter = require("../routers/login")
const registerRouter = require("../routers/register")


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);


module.exports = app