


const massage_model=require("../model/massage-model/massage-model");
module.exports=(socket,io)=>{

    socket.on("massage-send",async(data)=>{
        socket.broadcast.emit("get-massage", data);
    })
}
