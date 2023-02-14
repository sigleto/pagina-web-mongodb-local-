
import { Router } from "express"
const router=Router();
import fs from "fs"

const json_datos=fs.readFileSync("src/datos.json","UTF-8");
let datos=JSON.parse(json_datos);





router.get('/',(req,res)=>res.render('inicio',{titulo:"Bares que lugares"}))
router.get('/establecimientos',(req,res)=>res.render('establecimientos',{TITULO:"GASTRO"}))
router.get('/contacto',(req,res)=>res.render('contacto',{title:"DATOS DE CONTACTO"}))
router.post('/contacto',(req,res)=>

{ 
  const {nombre,preferencias,correo,comentarios}=req.body;
  let newdatos={id:Math.random()*100,nombre,preferencias,correo,comentarios};
  datos.push(newdatos);
  
  const json_datos=JSON.stringify(datos);   
  fs.writeFileSync("src/datos.json",json_datos,"UTF-8"); 
  fs.writeFileSync("src/datos.txt",json_datos,"UTF-8"); 
  res.redirect("/")})



export default router
