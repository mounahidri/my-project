const mongoose=require("mongoose");
const userSchema=mongoose.schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        typr:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})

const user=mongoose.model("user",userSchema);
module.exports=user;