const post_model=require("../../../model/postes-model/post-model");

module.exports=async(req,res)=>{
    if(req.params.data=="All Item"){
        const Datause=await post_model.findAll()
        res.json(Datause)    
    }else{
        const Datause=await post_model.findAll({
            where:{categories:req.params.data},
        })
        res.json(Datause)    
    }
}