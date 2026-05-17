const car=require("../models/carModel");

exports.getAllCars=async(req,res)=>{
    try{
        const results=await car.find({});
    //    console.log("results:",results);
       res.render("ourcars",{results});

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
    }catch(err){
        res.status(500).send(err.message);
    }

}
