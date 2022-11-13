const { TEXT } = require("sequelize")
const { STRING } = require("sequelize")
const database=require("../../database/database")

module.exports=database.define("basket",{
    name:{
        type:STRING,
    },
    image:{
        type:TEXT,
    },
    id:{
        type:TEXT,
        primaryKey: true,
    },
    numberAdd:{
        type:TEXT,
        defaultValue:0
    }

})


