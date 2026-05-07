const express=require("express");
const app=express();
const path=require("path");
const connectDb = require("./config/db");
const productRoutes=require("./routes/productRoutes.js");

app.use(express.static(path.join(__dirname,"assets")));

connectDb();


app.set("view engine","ejs");



app.get("/",(req,res)=>{
    res.render("index")
})
// app.use("/",productRoutes);

app.get("/collections",(req,res)=>{
    res.render("collections")
})
// app.use("/collections", productRoutes);

app.get("/ourstory",(req,res)=>{
    res.render("ourstory")
})

app.get("/craftmanship",(req,res)=>{
    res.render("craftmanship")
})

app.get("/visitus",(req,res)=>{
    res.render("visitus")
})















app.listen(3000,()=>console.log("server running on port 3000"));