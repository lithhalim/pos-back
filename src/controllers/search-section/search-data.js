const Post_Model=require("../../model/postes-model/post-model");

module.exports=async(req,res)=>{
    const data=await Post_Model.findAll({attributes:["productName","id"]})
    res.json(data)
}