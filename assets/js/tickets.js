/*
payTextFormat: Una nueva clase que se agrega al elemento con el id="showTotal" para cambiar su formato
cuando el importe a pagar es mayor que cero.
*/

//Extrae el precio desde el texto mostrado en la pagina utilizando expresiones regulares
const ticketValue = Number(document.getElementById("ticketValue").innerText.replace(/[A-Z a-z]\D{0,}/,""));

// state indica el estado de preparacion de las inputs
var state = {name : false, surName: false, eMail: false, numberTickets: false}
var data = {name :"", surName:"", eMail:"", numberTickets: 0, pay: 0 }
 

// Referencia a las ubicaciones de la carga de datos en el formulario
const discount = document.getElementById('categorySelector');
const showtotal = document.getElementById('showTotal');
const ticketForm = document.querySelector(".ticketForm");
const inputs = document.querySelectorAll(".ticketForm input");

// Escucha a cada evento sobre los inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
    input.addEventListener('focus',validateForm);
    input.addEventListener('change',validateForm);
});

// Seleccion del tipo de descuento desde las tarjetas
document.getElementsByClassName("card")[0].addEventListener("click",()=>{document.getElementById("categorySelector").selectedIndex = 1; calculate();});
document.getElementsByClassName("card")[1].addEventListener("click",()=>{document.getElementById("categorySelector").selectedIndex = 2; calculate();});
document.getElementsByClassName("card")[2].addEventListener("click",()=>{document.getElementById("categorySelector").selectedIndex = 3; calculate();});

function calculate(){
    let total = false;
    if (state.numberTickets){
        total = Math.round(inputs[3].value * discount.value * ticketValue);
// Se guarda el dato para procesarlo despues    
        data.pay = total;
// Se muestra el dato en el formulario
        showtotal.innerText = `Total a pagar = $ ${total}`;
    }
    // Imprimir en la pagina el total a pagar solamente si el valor es mayor que cero
    total ? showtotal.classList.add("payTextFormat"): erase();
}
// Escuchar eventos claves para calcular el precio a pagar
discount.addEventListener("mouseup",calculate);

// Borrar todo el precio a pagar cuando se borra el formulario
document.getElementById('borrarButton').addEventListener("click",eraseAll);



/******** Validacion de las entradas del formulario ********/
const regularExpressions= {
    name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
	eMail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	numberTickets: /^[1-9]{1,}$/ 
}
// Borra todos los datos cargados en el formulario
function eraseAll(){
    erase();
    cleanInput ("name");
    cleanInput ("surName");
    cleanInput ("eMail");
    cleanInput ("numberTickets");
// Borra todos los indicadores de estado
    Object.keys(state).forEach((key)=> state[key] = false);
    hideWarning();
}
// Borra los datos relacionados al precio de los tickets
function erase(){
    showTotal.innerText = `Total a pagar:`;
    showtotal.classList.remove("payTextFormat");
}
// Coloca una "x" roja en los datos erroneos de las entradas del formulario
function checkError (input){
    document.querySelector(`#${input}`).style = "box-shadow: 0 0 0 0.25rem rgb(255 0 0 / 25%)";
    document.querySelector(`#${input}`).style.borderColor = "red" ;
    state[input] = false;
    document.querySelector(`.validation-${input}`).classList.add("cac-error");
    document.querySelector(`.validation-${input}`).classList.remove("cac-ok");
    document.querySelector(`.error-${input}`).style.display ="block";
}
// Coloca un tilde verde en los datos verificados de las entradas del formulario
function checkOk (input){
    document.querySelector(`#${input}`).style = "box-shadow: 0 0 0 0.25rem rgb(0 255 0 / 25%)";
    document.querySelector(`#${input}`).style.borderColor = "rgb(0 255 0)" ;
    state[input] = true;
    document.querySelector(`.validation-${input}`).classList.add("cac-ok");
    document.querySelector(`.validation-${input}`).classList.remove("cac-error");
    document.querySelector(`.error-${input}`).style.display ="none";
}
// Borra el sombreado verde o rojo de los campos que no tienen el foco
function cleanShadow (input){
    document.querySelector(`#${input}`).style = "box-shadow: 0 0 0 0.25rem rgb(0 255 0 / 0%)";
}
// Borra los bordes rojo y verde de los campos vacios y sin foco
function cleanInput (input){
    document.querySelector(`.validation-${input}`).classList.remove("cac-error");
    document.querySelector(`.validation-${input}`).classList.remove("cac-ok");   
    document.querySelector(`.error-${input}`).style.display ="none";
}
// Oculta el mensaje de error encima de los botones
function hideWarning(){
    document.getElementById('showWarning').style.display = "none";
}
// Procesa los eventos relacionados con la carga del formulario
function validateForm (e) {
    hideWarning();
    document.getElementById('showWarning').style.display = "none";
	switch (e.target.name) {
        case "name":
            if(regularExpressions.name.test(e.target.value)){
//Si pasa el test entonces se guarda el dato para procesarlo despues                
                data.name = e.target.value;
                checkOk("name"); 
            }else{
                checkError("name");
            }
            if(e.type=="blur"){
                cleanShadow("name")
                if(e.target.value=='')
                cleanInput("name");
            }			
            break;
        case "surName":
            if(regularExpressions.name.test(e.target.value)){
//Si pasa el test entonces se guarda el dato para procesarlo despues    
                data.surName = e.target.value;
                checkOk("surName"); 
            }else{
                checkError("surName");
            }
            if(e.type=="blur"){
                cleanShadow("surName")
                if(e.target.value=='')
                    cleanInput("surName");
                }        
            break;
        case "eMail":
            if(regularExpressions.eMail.test(e.target.value)){
//Si pasa el test entonces se guarda el dato para procesarlo despues
                data.eMail = e.target.value;                    
                checkOk("eMail"); 
            }else{
                checkError("eMail");
            }
            if(e.type=="blur"){
                cleanShadow("eMail")
                if(e.target.value=='')
                    cleanInput("eMail");
            }       
            break;
        case "numberTickets":
            if(regularExpressions.numberTickets.test(e.target.value)){
//Si pasa el test entonces se guarda el dato para procesarlo despues    
                data.numberTickets = e.target.value;
                checkOk("numberTickets");
            }else{
                checkError("numberTickets");
            }
            if(e.type=="blur"){
                cleanShadow("numberTickets")
                if(e.target.value=='')
                    cleanInput("numberTickets");
                }
            calculate()
            break;
    }
}
        
/***************** Resumen del formulario **************/

ticketForm.addEventListener("submit", (e)=>{
// Evita que se manden los datos del formulario por submit 
    e.preventDefault();   
// Verifica que todos las propiedades del objeto "state" estan en true    
    if (Object.values(state).toString().includes("false")){
    document.getElementById('showWarning').style.display = "flex";
    }else{
// Si no hay estados en false, entonces muestra el resumen con los datos en el objeto "data".      
       showSummary();
    }
})
