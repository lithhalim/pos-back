const express = require('express')
const router = express.Router()



//------------------------------------ Create Section ----------------------------------------//
const creat_post=require("../../controllers/postes-controllers/Create_Post/Create-post");
router.post("/createpost",creat_post)


//-------------------------------------get section -------------------------------------------//

const Get_all_post=require("../../controllers/postes-controllers/Get_Post/get-allpostes");
const Get_Catagory=require("../../controllers/postes-controllers/Get_Post/get-catagory");
const get_page_product=require("../../controllers/postes-controllers/Get_Post/get-Product");

router.get("/getpostes",Get_all_post)
router.get("/getpostesCatagory/:data",Get_Catagory)
router.get("/getproductpage/:data",get_page_product)


//--------------------------------------delete section --------------------------------------------//

const DeleteItem=require("../../controllers/postes-controllers/Delete_Post/delete-item");
router.post("/DeleteItem",DeleteItem)






module.exports=router
