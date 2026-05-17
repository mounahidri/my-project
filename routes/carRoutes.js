const router=require("express").Router();

const carController=require("../controllers/carController.js");

router.get("/", carController.getAllCars);

router.get("/:id", carController.getOneCar);

module.exports=router;
