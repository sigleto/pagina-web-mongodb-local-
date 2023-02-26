import mongoose from "mongoose";
mongoose.set('strictQuery', false);

(async()=>{
    try{
     const URL= 'mongodb+srv://juanb:mongodbDos2.@cluster0.wdfy7nl.mongodb.net/datos-cliente?retryWrites=true&w=majority'
    const db=await mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true});
    console.log("nuevo dato",db.connection.name);
}catch(error){console.error (error);} 
})();       
  