const router=require("express").Router();

const carController=require("../controllers/carController.js");

const multer = require("multer");
const path=require("path")


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"assets/image");
    },
    filename:(res,file,cb)=>{
        let ext = path.extname(file.originalname);
        if(ext===".jfif"){
            ext=".jpg"
       }
       cb(null,Date.now() + ext);
    }
})
const fileFilter=(req,file,cb)=>{
    const allowedType=["image/jpeg","image/jpg","image/png","image/webp"];
    if (allowedType.includes(file.mimetype)){
        cb(null,true)
    }else{ 

    cb(new Error("only image are allowed"),false)
    }
 }

const upload=multer({
    storage,
    fileFilter,
    limits:{
        fileSize:2*1024*1024 //2mb
    }
})
























router.get("/", carController.getAllCars);

router.get("/cardetails/:id", carController.getOneCar);
router.post("/addnewcars",upload.single("image"),carController.addCar)
router.get("/delete/:id",carController.deletecar)
router.get("/edit/:id",upload.single("image"),carController.editcar)

module.exports=router;
