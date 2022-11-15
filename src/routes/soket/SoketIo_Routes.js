
module.exports=(io)=>{
   io.on("connection",(socket)=>{
      const Online_Frinds_Controlles=require("../../controllers-soket/Online_Fronds_Controllers");
      Online_Frinds_Controlles(socket,io);

  })

}