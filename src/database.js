import mongoose from "mongoose";
mongoose.set('strictQuery', false);

(async()=>{
    try{
        
    const db=await mongoose.connect("mongodb://0.0.0.0:27017/datos-contacto");
    console.log("nuevo dato",db.connection.name);
}catch(error){console.error (error);} 
})();       
  