const express=require("express");
const app=express();
const path=require("path");
const connectDb = require("./config/db");
const carRoutes=require("./routes/carRoutes.js");
const userRoutes=require("./routes/userRoutes.js");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname,"assets")));



connectDb();


app.set("view engine","ejs");



app.get("/",(req,res)=>{
    res.render("index")
})


app.get("/home",(req,res)=>{
    res.render("home")
})


app.get("/ourcars",(req,res)=>{
    res.render("ourcars")
})


app.use("/",userRoutes);

// app.use("/ourcars",carRoutes)


app.get("/cardetails",(req,res)=>{
    res.render("cardetails")
})

app.get("/feauturedcars",(req,res)=>{
    res.render("featuredcars")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

app.get("/login",(req,res)=>{
    res.render("login")
})














app.listen(3000,()=>console.log("server running on port 3000"));