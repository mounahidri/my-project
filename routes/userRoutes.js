const router = require("express").Router();

const userController=require("../controllers/userController.js");


router.post("/register",userController.userRegister);
router.post("/login",userController.userLogin);
router.get("/logout",(req,res)=>{
    req.session.destroy();
    // res.clearCookie("connect.sid");
    res.redirect("/login");
})


module.exports=router;
