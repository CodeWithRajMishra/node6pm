const express= require("express");
const app= express();
const mongoose= require("mongoose");
const bodyparser= require("body-parser");
const Port=8000;
const EmpRoute= require("./routes/employeeRoutes");
mongoose.connect("mongodb://127.0.0.1:27017/nazneen").then(()=>{
    console.log("DB Connected!!!")
})
app.set("view engine", "ejs");
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/", EmpRoute);
app.listen(Port, ()=>{
    console.log(`Server run on ${Port}`);
})