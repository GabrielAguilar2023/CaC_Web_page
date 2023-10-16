/*
    payTextFormat: Una nueva clase que se agrega al elemento con el id="showTotal" para cambiar su formato
    cuando el importe a pagar es mayor que cero.
*/

//Extrae el precio desde el texto mostrado en la pagina utilizando expresiones regulares
const ticketValue = Number(document.getElementById("ticketValue").innerText.replace(/[A-Z a-z]\D{0,}/,""));

// Referencia a las ubicaciones de la carga de datos en el formulario
const amount = document.getElementById('numberTickets');
const discount = document.getElementById('categorySelector');
const showtotal = document.getElementById('showTotal');
const estudiante = document.getElementsByClassName("card")[1];

function erase(){
    showTotal.innerText = `Total a pagar:`;
    showtotal.classList.remove("payTextFormat");
}

function calculate(){
    let total = Math.round(amount.value * discount.value * ticketValue);
    showtotal.innerText = `Total a pagar = $ ${total}`;
// Imprimir en la pagina el total a pagar solamente si el valor es mayor que cero
    total ? showtotal.classList.add("payTextFormat"): erase();
}
// Escuchar eventos claves para calcular el precio a pagar
amount.addEventListener("keyup",calculate);
amount.addEventListener("change",calculate);
discount.addEventListener("mouseup",calculate);

// Borrar todo el precio a pagar cuando se borra el formulario
document.getElementById('borrarButton').addEventListener("click",erase);

estudiante.addEventListener("click",()=>{alert(123)})


/******** Validacion de las entradas del formulario ********/

function checkError (input){
    document.querySelector(`#${input}`).style.borderColor = "red" ;
    document.querySelector(`.validation-${input}`).classList.add("cac-error");
    document.querySelector(`.validation-${input}`).classList.remove("cac-ok");
    document.querySelector(`.error-${input}`).style.display ="block";
}

function checkOk (input){
    document.querySelector(`#${input}`).style.borderColor = "green" ;
    document.querySelector(`.validation-${input}`).classList.add("cac-ok");
    document.querySelector(`.validation-${input}`).classList.remove("cac-error");
    document.querySelector(`.error-${input}`).style.display ="none";
}





const regularExpressions= {
	name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	eMail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	number: /^\d{1,}$/ // 7 a 14 numeros.
}
const ticketForm = document.querySelector(".ticketForm")
const inputs = document.querySelectorAll(".ticketForm input")

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

function validarFormulario (e) {
	switch (e.target.name) {
		case "name":
            if(regularExpressions.name.test(e.target.value)){
                checkOk("name"); 
            }else{
                checkError("name");
            }



			
		break;
		case "surName":
			console.log("validar surName");
		break;
		case "eMail":
            console.log("validar eMail");
		break;
		case "numberTickets":
			console.log("validar número");
		break;
		
	}
}







// checkError("name");
// checkOk("surName");
// checkError("eMail");
// checkOk("numberTickets");













// @@ -0,0 +1,106 @@
// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input');

// const expresiones = {
// 	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	password: /^.{4,12}$/, // 4 a 12 digitos.
// 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
// }

// const campos = {
// 	usuario: false,
// 	nombre: false,
// 	password: false,
// 	correo: false,
// 	telefono: false
// }

// const validarFormulario = (e) => {
// 	switch (e.target.name) {
// 		case "usuario":
// 			validarCampo(expresiones.usuario, e.target, 'usuario');
// 		break;
// 		case "nombre":
// 			validarCampo(expresiones.nombre, e.target, 'nombre');
// 		break;
// 		case "password":
// 			validarCampo(expresiones.password, e.target, 'password');
// 			validarPassword2();
// 		break;
// 		case "password2":
// 			validarPassword2();
// 		break;
// 		case "correo":
// 			validarCampo(expresiones.correo, e.target, 'correo');
// 		break;
// 		case "telefono":
// 			validarCampo(expresiones.telefono, e.target, 'telefono');
// 		break;
// 	}
// }

// const validarCampo = (expresion, input, campo) => {
// 	if(expresion.test(input.value)){
// 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
// 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
// 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
// 		campos[campo] = true;
// 	} else {
// 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
// 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
// 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
// 		campos[campo] = false;
// 	}
// }

// const validarPassword2 = () => {
// 	const inputPassword1 = document.getElementById('password');
// 	const inputPassword2 = document.getElementById('password2');

// 	if(inputPassword1.value !== inputPassword2.value){
// 		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
// 		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
// 		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
// 		campos['password'] = false;
// 	} else {
// 		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
// 		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
// 		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
// 		campos['password'] = true;
// 	}
// }

// inputs.forEach((input) => {
// 	input.addEventListener('keyup', validarFormulario);
// 	input.addEventListener('blur', validarFormulario);
// });

// formulario.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	const terminos = document.getElementById('terminos');
// 	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
// 		formulario.reset();

// 		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
// 		setTimeout(() => {
// 			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
// 		}, 5000);

// 		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
// 			icono.classList.remove('formulario__grupo-correcto');
// 		});
// 	} else {
// 		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
// 	}
// });