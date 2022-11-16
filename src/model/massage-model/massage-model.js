const { TEXT,DataTypes } = require("sequelize")
const database=require("../../database/database");


const  Massage_Model=database.define("massages",{
    Image:{
      type:TEXT
    },
    fullName:{
      type:TEXT
    },
    regusterid:{
      type:TEXT,
    },
    role:{
        type:TEXT,
    },
    text:{
      type:TEXT,
    },
    time:{
      type:TEXT
    }
})

module.exports=Massage_Model