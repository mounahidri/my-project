const router=require("express").Router();

const carController=require("../controllers/carController.js");

router.get("/", carController.getAllCars);

router.get("/cardetails/:id", carController.getOneCar);

module.exports=router;
