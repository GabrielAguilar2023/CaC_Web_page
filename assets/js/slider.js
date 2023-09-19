var move=true;
var a = 2;
var x = 12000;

// coloca la primera imagen en el background 
document.getElementById('radio1').checked = true;

// Desactiva la circulacion de imagenes en background al presionar los botones de control
document.getElementById('manual-activation').addEventListener('click',(e)=>{
	mover=false;
})

// Circulacion de imagenes en background cada x milisegundos
setInterval(function () {
	if(move){
		document.getElementById('radio' + a).checked = true;
		a++;
		if (a > 3) {
		a = 1
		}
	}
}, x);