

let reloj=document.querySelector(".contenido");


reloj.addEventListener("click",horas);

function horas(){
	
	let tiempo=new Date();
	
	let hora=tiempo.getHours();
	let minutos=tiempo.getMinutes();
	let segundos=tiempo.getSeconds();
	if (hora<10){
		hora="0"+hora;
	}
	if (minutos<10){
		minutos="0"+minutos;
	}
	if (segundos<10){
		segundos=("0"+segundos);
	}
	let horaActual=`${hora} : ${minutos} : ${segundos}` ;
	reloj.value=horaActual;	

}
setInterval(horas,1000);