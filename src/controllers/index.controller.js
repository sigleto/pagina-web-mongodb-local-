
const controllers={}
import Task from "../models/Task.js"
import conection from '../database.js'

controllers.principal=async(req,res)=>res.render('inicio',{titulo:"Triana-Bares"});const conect=await conection(); 
controllers.establecimiento=(req,res)=>res.render('establecimientos',{TITULO:"GASTRO"})
controllers.getContacto=(req,res)=>res.render('contacto',{title:"DATOS DE CONTACTO"})
controllers.postContacto=async(req,res)=>{
    const task=Task(req.body);
    const taskSaved= await task.save();
    console.log(taskSaved);
    
  res.redirect("/")};

controllers.rutasBares=(req,res)=>res.render('partials/establecimientos/bares');
controllers.rutasRestaurantes=(req,res)=>res.render('partials/establecimientos/restaurantes')


export default controllers