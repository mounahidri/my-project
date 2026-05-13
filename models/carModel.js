const mongoose=require("mongoose");

const carSchema=mongoose.Schema({
    marque:String,
    modele:String,
    price:Number,
    image:String,
    annee:Number,
    color:String,
    description:String
   
})

const car=mongoose.model("car",carSchema);

module.exports=car;