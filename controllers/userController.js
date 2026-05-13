const user=require("../model/userModel");
const bcrypt=require("bcrypt");


exports.userRegister= async (req,res)=>{
    try{

        const {name,phone,email,password}=req.body
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new user({
            name,
            phone,
            email,
            password:hashedPassword
        });
            await newUser.save();
            res.redirect("/login");

    }catch{
        res.status(500).send(err.message);
    }
}