const regusterModel=require("../../model/reguster_model/reguster_model");


module.exports=async(req,res)=>{
    res.json(await regusterModel.findAll())
}