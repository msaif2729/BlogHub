const loginRouter = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const {JWT_SECRET} = require("../config/config")
const User = require("../models/user")


loginRouter.post("/loginUser",async (req,res)=>{
    try {
        
    const {username,pass} = req.body;

    
    const user = await User.findOne({username})
    if(!user)
    {
        return res.status(201).send({success:false,error:"Username Not Exists!"})
    }
    
    const passHash = await bcrypt.compare(pass,user.pass)
    if(!passHash)
    {
        return res.status(201).send({success:false,error:"Incorrect Password!"})
    }

    const authtoken = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.json({ success: true, authtoken });
    

    } catch (error) {
        res.status(500).send({success:false,error:error.message})
    }

})

module.exports = loginRouter