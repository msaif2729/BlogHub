const registerRouter = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const { JWT_SECRET } = require("../config/config");
const User = require("../models/user")

registerRouter.post("/createUser",async (req,res)=>{
    try {
        
    const {name,username,pass} = req.body

    let uname = await User.findOne({username:username})
    if(uname)
    {
        return res.send({success:false,error:"Username Already Exists"})
    }
    
    const salt = 10;
    const passHash = await bcrypt.hash(pass,salt);

    const user = await User({
        name,
        username,
        pass:passHash
    })

    const savedUser = await user.save()

    const userObj = user.toObject();
    delete userObj._id;


    const authtoken = jwt.sign({ userId: savedUser._id }, JWT_SECRET);
    // console.log(authtoken);


   res.json({ success: true, authtoken });
//    console.log(userObj);
    

    } catch (error) {
        res.status(500).send({success:false,error:error.message})
    }

})

module.exports = registerRouter