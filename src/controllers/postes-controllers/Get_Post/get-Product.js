const Post_Model=require("../../../model/postes-model/post-model");

module.exports=async(req,res)=>{
    const datause=await Post_Model.findAll({
        where:{id:req.params.data},        
    })
    res.json(datause)
}