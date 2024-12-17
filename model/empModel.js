const mongoose= require("mongoose");

const empSchema= new mongoose.Schema({
    empno:Number,
    name:String,
    city:String,
    salary:Number  
})
module.exports=mongoose.model("employee", empSchema);