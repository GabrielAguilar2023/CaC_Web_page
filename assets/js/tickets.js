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

function borrar(){
    showTotal.innerText = `Total a pagar:`;
    showtotal.classList.remove("payTextFormat"); 
}

function calcular(){
    let total = amount.value * discount.value * ticketValue;
    showtotal.innerText = `Total a pagar = $ ${Math.round(total)}`;
// Imprimir en la pagina el total a pagar solamente si el valor es mayor que cero
    total ? showtotal.classList.add("payTextFormat"): borrar ();
}
// Escuchar eventos claves para calcular el precio a pagar
amount.addEventListener("keyup",calcular);
amount.addEventListener("change",calcular);
discount.addEventListener("mouseup",calcular);

// Borrar todo el precio a pagar cuando se borra el formulario
document.getElementById('borrarButton').addEventListener("click",borrar);