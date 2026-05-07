const router=require("express").router();

const productController=require("../controllers/productController.js");

router.get("/", productController.getAllProduct);

module.exports=router;
