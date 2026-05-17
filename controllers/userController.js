const user=require("../models/userModel");
const bcrypt=require("bcrypt");

// Register :::::::::::::::::
exports.userRegister= async (req,res)=>{
    try{
 
        const {name,phone,email,password}=req.body

        const existinuser=await user.findOne({email});
        if(existinuser){
            req.flash("error_msg","email already exist");
            return res.redirect("/register");
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new user({
            name,
            phone,
            email,
            password:hashedPassword
        });
            await newUser.save();
            res.redirect("/login");

    }catch(err){
        console.log("error:",err)
        res.status(500).send(err.message);
    }
}


//login :::::::::::::::::::::::::::::::::::::

exports.userLogin=async(req,res)=>{
    try{
const {email,password}=req.body
const result=await user.findOne({email});
console.log(result);

if(!result){
    req.flash("error","Try again,something went wrong");
    return res.redirect("/login")
} 

const isMatch=await bcrypt.compare(password, result.password);

if(!isMatch){
    req.flash("error","Try again,something went wrong");
    return res.redirect("/login")
}



req.session.user=result;
res.redirect("/home");
    }catch(err){
        res.status(500).send(err.message);
    }
}