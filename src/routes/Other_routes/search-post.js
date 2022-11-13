const express = require('express')
const router = express.Router()

const Search_controolers=require("../../controllers/search-section/search-data");
router.get("/searchSection",Search_controolers);



module.exports=router
