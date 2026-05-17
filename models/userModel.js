const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    phone: {
          type: String,
          trim: true
    },
    email:{
        type:String,
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