const express=require("express");
const app=express();
const path=require("path");
const connectDb = require("./config/db");

const carRoutes=require("./routes/carRoutes.js");
const userRoutes=require("./routes/userRoutes.js");
const flash=require("connect-flash")
const car=require("./models/carModel");
const session=require("express-session")
// body parser
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// static filrs assets

app.use(express.static(path.join(__dirname,"assets")));


// connect Database

connectDb();


// view engine

app.set("view engine","ejs");

app.use(flash())
//////////   na3ml session bch ne3lm lbrowser eli ena connectee      ////////////

app.use(session({

    secret:"mysecretKey",//lbrowser ya3ml ID whdou

    resave:false,// prformance :::ken mafamech modification may3awedch ya3mel session

    saveUninitialized:false,// lezm tenzel login bch tet3malk session

}))


app.use((req,res,next)=>{
    res.locals.error_msg = req.flash("error_msg")
    res.locals.error = req.flash("error")
    res.locals.user=req.session.user||null
    next();
})

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/addnewcars",(req,res)=>{
    res.render("addnewcars")
})

app.get("/home",(req,res)=>{
    res.render("home")
})


// app.get("/collections",(req,res)=>{
//     res.render("collections")
// })


app.use("/",userRoutes);

app.use("/collections",carRoutes);



// app.get("/cardetails",(req,res)=>{
//     res.render("cardetails")
// })



app.get("/inventory",async(req,res)=>{
    const cars= await car.find({});
    res.render("inventory",{cars});
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












//server listen

app.listen(3000,()=>console.log("server running on port 3000"));