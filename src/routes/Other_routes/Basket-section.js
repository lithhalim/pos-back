
const express = require('express')
const router = express.Router()

const AddBasket_controolers=require("../../controllers/Basket_controllers/Add_To_Basket");
router.post("/addBasket",AddBasket_controolers);

const GetBasket_controolers=require("../../controllers/Basket_controllers/get_Item_Add_Basket");
router.get("/Basket",GetBasket_controolers);


module.exports=router


