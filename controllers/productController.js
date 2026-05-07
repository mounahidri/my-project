const Product=require("../models/productModel");

// exports.getAllProduct=async(req,res)=>{
//     try{
//         const resProduct=await Product.find({});
//        console.log("resProduct:",resProduct);
//        res.render("collections",{resProduct});

//     }catch(err){
//         res.status(500).send(err.message);

//     }
    
// }

exports.getAllProduct=async(req,res)=>{
    try{
        const resProduct=await Product.find({}).sort(-1).limit(3);
       console.log("resProduct:",resProduct);
       res.render("collections",{resProduct});

    }catch(err){
        res.status(500).send(err.message);

    }
    
}