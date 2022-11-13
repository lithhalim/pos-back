const postes_model=require("../../../model/postes-model/post-model");

module.exports=async(req,res)=>{
    const data=await postes_model.findAll()
    res.json(data)
}