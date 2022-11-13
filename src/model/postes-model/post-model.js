const { TEXT } = require("sequelize")
const database=require("../../database/database")



const  postes_model=database.define("posts",{
    Price:{
      type:TEXT
    },
    categories:{
      type:TEXT
    },
    description:{
      type:TEXT,
    },
    productName:{
      type:TEXT,
    },
    postId:{
      type:TEXT,
    },
    quantity:{
      type:TEXT,
    },
    Image:{
      type:TEXT,
    },

})

module.exports=postes_model