const express = require('express')
const router = express.Router()



//------------------------------------ Create Section ----------------------------------------//
const create_Invios=require("../../controllers/Invios_Controlle/Create_Invios");
router.post("/createinvios",create_Invios);


const Get_Invios=require("../../controllers/Invios_Controlle/Get_Invios");
router.get("/getInvios",Get_Invios);




module.exports=router
