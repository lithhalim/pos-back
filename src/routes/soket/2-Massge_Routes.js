
const MassageModel=require("../../model/massage-model/massage-model");

module.exports=(io)=>{
    io.on("connection",(socket)=>{
        socket.on("sendmassage",async(data)=>{
            await MassageModel.create(data)
          io.emit("recivemassage",data)
        })
      })       
 }