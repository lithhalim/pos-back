
const basketModel=require("../../model/Basket-model/Basket-Model");
module.exports=async(req,res)=>{
    const datause=await basketModel.create(req.body);
}