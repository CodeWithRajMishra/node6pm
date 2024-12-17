const EmpModel= require("../model/empModel");
const empHome=(req, res)=>{
    res.render("Home");
}
const empInsert=(req, res)=>{
    res.render("Insert");
}
const empDisplay=async(req, res)=>{
   
   const MyData= await EmpModel.find();
   console.log(MyData);
    res.render("Display", {Data:MyData});
}
const empContact=async(req, res)=>{
     const Data= await      EmpModel.find();
    res.render("Contact", {Data:Data});
}
const studataSave=(req, res)=>{
         const {eno, nm, ct, sal} = req.body;
         EmpModel.create({
            empno:eno,
            name:nm,
            city:ct,
            salary:sal  
         })
         res.render("Insert");
}

const recordDelete=async(req, res)=>{
       const Myid=req.query.id;
       await EmpModel.findByIdAndDelete(Myid);
       
       const Data= await      EmpModel.find();
       res.render("Contact", {Data:Data});

        res.render("Home");
}


module.exports={
    empHome,
    empInsert,
    empDisplay,
    empContact,
    studataSave,
    recordDelete
 
}