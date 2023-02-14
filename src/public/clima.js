
let fecha=document.querySelector('.fecha');
let temperatura=document.querySelector('.temperatura');
let max=document.querySelector('.temp_max');
let min=document.querySelector('.temp_min');
let estado=document.querySelector('.estado');
let lluvia=document.querySelector('.lluvia');


let url="https://www.el-tiempo.net/api/json/v2/provincias/41/municipios/41091";


fetch(url)
.then(res=>res.json())

.then(resJSON=>{
let datos=resJSON

        let dia=(datos.fecha).toString().substring(8, 10);
        let mes=(datos.fecha).toString().substring(5, 7);
        let año=(datos.fecha).toString().substring(0, 4);
       
       console.log(mes)


    fecha.innerHTML=`${dia} - ${mes} - ${año}`;
    temperatura.innerHTML=`${datos.temperatura_actual} grados`;
    max.innerHTML=`Max: ${datos.temperaturas.max} grados  -  Min: ${datos.temperaturas.min} grados`;
    estado.innerHTML=datos.stateSky.description;
    lluvia.innerHTML=`${datos.precipitacion} % `;
    
    
    console.log(resJSON)})
    
.catch(err=>console.log(err)); 
