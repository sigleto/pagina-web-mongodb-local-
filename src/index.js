//express sirve para implementar un servidor más fácilmente
import express from "express";
//estas dos sirven para implementar la ruta completa de modo más facil y acceder a la carpeta "views" 
//donde se guarda lo que queremos enviar al FrontEnd
import {dirname}from 'path';
import { fileURLToPath } from "url";
//con esta variable accedemos a la carpeta "routes"
import indexRouter from './routes/rutas.js';
import rutasestab from './routes/rutasestab.js';
//importamos el Middelware "Morgan"
import morgan from "morgan";


const app=express();
app.use(morgan('dev'));
const __dirname=dirname(fileURLToPath(import.meta.url))
app.set('views',__dirname+'/views')

//ejs sirve para poder incluir HTML
app.set('view engine','ejs')
/*Ejemplo de un middelware para verificar contraseña antes de entrar
app.use((req,res,next)=>{
    if (req.query.loggin==="carcelero"){next()}
    else (res.send("No sabes el contraseño"))
    })*/

//Llama al método static de express para incluir estilos css
app.use(express.static(__dirname+'/public/estilos css'))
app.use(express.static(__dirname+'/public/'))

//Implementa "text" para que express pueda interpretar el texto,json o formularios que se envia con "req" ose recibe con "res"
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Llama a las variables indexRouter para acceder a las rutas

app.use(indexRouter);
app.use(rutasestab);




//ejemplo de manejo de parámetros
app.get('/caca/:user',(req,res)=>{
if (req.params.user==='juan'){res.send(`vale,${req.params.user.toUpperCase()}`)}else{res.sendFile('./public/LogoJuan.png',{root:__dirname})};
})


app.listen(process.env.PORT||3000);
console.log('escuchando',3000);