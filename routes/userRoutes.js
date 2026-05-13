const router = require("express").Router();

const userController=require("../controllers/userController.js");


router.post("/register",userController.userRegister);


module.exports=router;
