const InciosModel=require("../../model/Invios-model/Invios_Model");

module.exports=async(req,res)=>{
    const data=await InciosModel.findAll();
    res.json(data)
}