const Invios_Model=require("../../model/Invios-model/Invios_Model");
module.exports=async(req,res)=>{
    let datause=await Invios_Model.create(req.body);
    res.json(req.body)
}