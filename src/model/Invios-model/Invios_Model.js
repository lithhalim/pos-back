const { TEXT,DataTypes } = require("sequelize")
const database=require("../../database/database")


const  Invios_model=database.define("invios",{
    invoiceNumber:{
      type:TEXT
    },
    UserName:{
      type:TEXT
    },
    NumberItem:{
      type:TEXT,
    },
    AllDatauser:{
      type:DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING))
      ,
    },
    TotalPrice:{
      type:TEXT,
    },
    Cash:{
      type:TEXT,
    },
    RemaningValue:{
      type:TEXT,
    },
    delivery:{
        type:TEXT,
    },
    descount:{
        type:TEXT,
    },
})

module.exports=Invios_model