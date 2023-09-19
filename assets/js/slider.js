var move = true;
var number = 2;
var time = 12000;

// coloca la primera imagen en el background 
document.getElementById('radio1').checked = true;

// Desactiva la circulacion de imagenes en background al presionar los botones de control
document.getElementById('manual-activation').addEventListener('click',(e)=>{
	move=false;
})

// Circulacion de imagenes en background cada "time" milisegundos
setInterval(function () {
	if(move){
		document.getElementById('radio' + number).checked = true;
		number++;
		if (number > 3) {
		number = 1
		}
	}
}, time);