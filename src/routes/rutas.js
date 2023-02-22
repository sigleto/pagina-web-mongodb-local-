
import express from "express";
import Task from "../models/Task.js"
const router= express.Router();
import fs from "fs"

const json_datos=fs.readFileSync("src/datos.json","UTF-8");
let datos=JSON.parse(json_datos);





router.get('/',(req,res)=>res.render('inicio',{titulo:"Bares que lugares"}))
router.get('/establecimientos',(req,res)=>res.render('establecimientos',{TITULO:"GASTRO"}))
router.get('/contacto',(req,res)=>res.render('contacto',{title:"DATOS DE CONTACTO"}))
router.post('/contacto',async(req,res)=>{
  const task=Task(req.body);
  const taskSaved= await task.save();
  console.log(taskSaved)
res.redirect("/")});
 


export default router
