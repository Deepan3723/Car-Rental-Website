const router = require("express").Router();
const User= require("../model/UserSchema");

router.post("/signup",async (req,res) =>{
    const newUser = new User({
        Name:req.body.Name,
        email:req.body.email,
        password:await bcrypt.hash(password, 10),
        contact:req.body.contact,
    });
try{
    const users=await newUser.save();
    res.status(201).json(users)
}catch(err){
    res.status(500).json(err);
}
});
module.exports=router;