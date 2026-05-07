const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    category:String,
    brand:String,
    color:String,
    size:Number
})

const Product=mongoose.model("Product",productSchema);

module.exports=Product;