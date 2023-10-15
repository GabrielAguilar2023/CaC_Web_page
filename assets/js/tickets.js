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
    document.querySelector(`.error-${input}`).style.display ="block";
}

function checkOk (input){
    document.querySelector(`#${input}`).style.borderColor = "green" ;
    document.querySelector(`.validation-${input}`).classList.add("cac-ok");
    document.querySelector(`.error-${input}`).style.display ="none";
}
checkOk("name");
checkOk("surName");
checkOk("eMail");
checkOk("numberTickets");