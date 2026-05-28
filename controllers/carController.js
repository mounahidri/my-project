const car=require("../models/carModel");

exports.getAllCars=async(req,res)=>{
    try{
        const results=await car.find({});
    //    console.log("results:",results);
       res.render("collections",{results});

    }catch(err){
        res.status(500).send(err.message);

    }
    
}
exports.getOneCar=async(req,res)=>{
    try{
        console.log("id recieved:", req.params.id)
        const details=await car.findById(req.params.id);
   
      
        if(!details){ 
            return res.status(404).send("Car not found");
    }
        res.render("cardetails",{details})
        console.log("details:",{details})
         
    }catch(err){
        res.status(500).send(err.message);
    }

}

///////// ADD NEW CARS

exports.addCar= async(req,res)=>{
    try{
        const {marque,modele,price,annee,color,description,moteur,performance,consommation}=req.body
        const  newCar=new car({
            marque,
            modele,
            price,
            annee,
            color,
            description,
            moteur,
            performance,
            consommation,
            image:req.file.filename
        })
        await newCar.save();
        req.flash("success_msg","Car added successfully")
        res.redirect("/addnewcars")

    }catch(err){
        req.flash("error_msg","Upload Failed")
        res.redirect("/addnewcars");
    }
}
///////////// Delete car

exports.deletecar= async(req,res)=>{
    try{
        const {id}=req.params;
        await car.findByIdAndDelete(id);
        req.flash("success_msg","Car Deleted successfully")
        res.redirect("/inventory");

    }catch(err){
        req.flash("error_msg","Deleted Failed");
        res.redirect("/inventory");

    }
}
/////////// Edit car

exports.editcar=async(req,res)=>{
    try{
        const findcar= await car.findById(req.params.id)

        if (!findcar){
            req.flash("error_msg","Car not Found");
            return res.redirect("/inventory");

        }
    res.render("editcar",{ findcar });

    }catch(err){
        req.flash("error_msg","try again");
        res.redirect("/inventory");


    }
}