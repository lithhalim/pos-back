
'use strict'
//---------------------------------------------require section----------------------------------------------//
//required express js section
const express = require('express');
const app = express();
const http = require('http')
const cors=require("cors");
const cookieParser = require('cookie-parser')
app.use(cookieParser())
require("dotenv").config();





//--------------------------------------------socket io section ----------------------------------------//

const {Server} =require("socket.io")

const server = http.createServer(app);
const io=new Server(server,{
  cors:{
      origin: '*',
      methods:["GET","POST","PUT","DELETE"],
      credentials:true,            //access-control-allow-credentials:true

  }
})

app.use(cors({
  origin: '*',
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,            //access-control-allow-credentials:true
}))


// support url encoded bodies{parser use to accept the encoded json come from front }
app.use(express.urlencoded({ extended: false }));
// support json encoded bodies
app.use(express.json());






//-----------------------------------------------routes section--------------------------------------------//
const authntication_routes=require("../routes/authntication_routes/authntication_routes")
app.use(authntication_routes)


const Postes_routes=require("../routes/postes_routes/postes_routes");
app.use(Postes_routes)

const invios_Routes=require("../routes/invios_routes/postes_routes");
app.use(invios_Routes)




//-----------------------------------------Stripe section --------------------------------------------//
const stripe_controlle=require("../controllers/stripe-controllers/stripe-controllers");
app.post("/create-checkout-session",stripe_controlle)



//----------------------------------------- Soket Io ------------------------------------------------------//

// get All Online Frinds Routes 
const Online_Frinds=require("../routes/soket/1-Online_Routes");
Online_Frinds(io);


//Get All Group Massages And Privet Massages
const Massage_Frinds=require("../routes/soket/2-Massge_Routes")
Massage_Frinds(io)



const MassageModel=require("../model/massage-model/massage-model");
app.get("/getdata",async(req,res)=>{
  let data=await MassageModel.findAll();
  res.json(data)
})


//----------------------------------------Error Handeler-----------------------------------------------------//
const NotFound404=require("../middelware/404-500/404");
const ErrorHandeler=require("../middelware/404-500/500");

app.use(ErrorHandeler);
app.use(NotFound404);

//----------------------------------------DataBase Connection----------------------------------------------//


//Connection With The Database
const database=require("../database/database");
async function start(PORT){// WHE MUST RUN DATABASE CONNECTION BEFORE LISTEN TO SERVER
  server.listen(PORT, async() => {
        try {
            await database.sync();  
            //USE TO SYNC ANY CHANGE CAN HAPPEN  ON DATABASE 
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }    
      console.log(`Example app listening on port ${PORT}`)
    })
    };
    
  

//---------------------------------------export file section---------------------------------------------//
    module.exports ={
    start: start,
    server:server
};
