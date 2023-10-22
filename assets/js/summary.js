function create (element,classElement,id,elementText){
    const something = document.createElement(element);
    something.classList.add(classElement[0],classElement[1],classElement[2],classElement[3],classElement[4],classElement[5]);
    something.innerText =elementText;
    something.setAttribute("id",id);
    return something;
}

function showSummary(){
    const bottonClass = ["w-100","btn","btn-lg","btn-form","buttonColor","mb-3"];
    const line = document.createElement("hr");
// Crea un nuevo body para el mostrar el resumen
    newBody = document.querySelector("body");
// Crea el contenedor del ticket borrando el codigo original
    newBody.innerHTML = "<div class='containerTicket'></div>"
    const containerTicket = document.querySelector(".containerTicket");
// Acá comienza el ticket
    containerTicket.insertAdjacentHTML("afterbegin","<div class='ticket'></div>");
    const ticket = containerTicket.querySelector(".ticket");
    ticket.insertAdjacentHTML("beforeend","<div class='title'></div>");
    const title = ticket.querySelector(".title");
    title.insertAdjacentHTML("beforeend","<h1>RESUMEN DE COMPRA</h1>");
    title.insertAdjacentHTML("afterend","<hr>");
    ticket.insertAdjacentHTML("beforeend","<div class='detail'></div>")
    const detail = ticket.querySelector(".detail");
    detail.insertAdjacentHTML("beforeend","<div class='firstRow'></div>")
    const firstRow = detail.querySelector(".firstRow");
    firstRow.insertAdjacentHTML("afterend","<hr>");
    firstRow.insertAdjacentHTML("beforeend","<h5>Tickets para <b>Conf. Bs.As.</b></h5>");
    firstRow.insertAdjacentHTML("beforeend","<p>Fecha 15/12/2023 17:30 Hs.</p>");      
    detail.insertAdjacentHTML ("beforeend","<div class='renglon1 simpleRow'></div>");
    const simpleRow = detail.querySelector(".simpleRow");
    simpleRow.insertAdjacentHTML("beforeend","<h5>Nombre</h5>");
    simpleRow.insertAdjacentHTML("beforeend",`<p>${data.name} ${data.surName}</p>`);   
    document.querySelector(".renglon1").insertAdjacentHTML("beforeend","<hr>");
    simpleRow.insertAdjacentHTML("beforeend","<h5>Email</h5>");
    simpleRow.insertAdjacentHTML("beforeend",`<p id='email'>${data.eMail}</p>`);   
    document.querySelector("#email").insertAdjacentHTML("afterend","<hr>"); 
    detail.insertAdjacentHTML("beforeend","<div class='renglonImportante1 importantRow'></div>");
    const importantRow = detail.querySelector(".importantRow");   
    importantRow.insertAdjacentHTML("beforeend","<h5>Cantidad de tickets</h5>");
    importantRow.insertAdjacentHTML("beforeend",`<p class="fieldSecond">${data.numberTickets} X $ 200 = $ ${data.numberTickets*200}</p>`);
    document.querySelector(".renglonImportante1").appendChild(line);

//Muestra precio descontado si existe descuento para no mostrar cero   
    if(!(data.discount==1)){
    importantRow.insertAdjacentHTML("beforeend","<h5>Descuento</h5>");

    importantRow.insertAdjacentHTML("beforeend",`<div class='containerDiscount'></div>`);
    const containerDiscount = importantRow.querySelector('.containerDiscount');
    containerDiscount.insertAdjacentHTML("beforeend",`<p class='fieldSecond' id = 'discountType'> ${data.discountType}:</p>`);
    containerDiscount.insertAdjacentHTML("beforeend",`<p class='fieldSecond' id = 'discountValue'> - ${Math.round(100*(1-data.discount))}%  = $ ${Math.round(data.numberTickets * (1-data.discount)*200)} </p>`);
    
    importantRow.insertAdjacentHTML("beforeend","<hr>");
    };

    importantRow.insertAdjacentHTML("beforeend","<h5 id='totalLegend'>Total a pagar</h5>");
    importantRow.insertAdjacentHTML("beforeend",`<p>$ ${data.pay}</p>`);

    ticket.insertAdjacentHTML("beforeend","<div class='containerQR'></div>");
    const containerQR = document.querySelector(".containerQR");

    
    containerQR.insertAdjacentHTML("afterbegin",`<img alt='sin conexón para el Código QR '
    src='https://barcode.tec-it.com/barcode.ashx?data=${data.eMail}+%24${data.pay}%0AProyecto+Integrador%0AGabrielAguilar+23548&code=QRCode&translate-esc=on&dmsize=Default&eclevel=M'/>`);  
    containerQR.insertAdjacentHTML("beforeend","<p>Escanea el código QR <br> para realizar tu pago.</p>");
    






    
    
// <div style='text-align: center;'>
//   <!-- insert your custom barcode setting your data in the GET parameter "data" -->
//   <img alt='Barcode Generator TEC-IT'
//        src='https://barcode.tec-it.com/barcode.ashx?data=jorgecontreras%40hotmail.com%0A%3C%24400%3EConf.Bs.As.&code=QRCode&translate-esc=on&dmsize=Default&eclevel=L'/>
// </div>
// <div style='padding-top:8px; text-align:center; font-size:15px; font-family: Source Sans Pro, Arial, sans-serif;'>
//   <!-- back-linking to www.tec-it.com is required -->
//   <a href='https://www.tec-it.com' title='Barcode Software by TEC-IT' target='_blank'>
//     TEC-IT Barcode Generator<br/>
//     <!-- logos are optional -->
//     <img alt='TEC-IT Barcode Software' border='0'
//          src='http://www.tec-it.com/pics/banner/web/TEC-IT_Logo_75x75.gif'>
//   </a>
// </div>











// Crea contenedor de botones dentro del contenedor del ticket   
    containerTicket.insertAdjacentHTML("beforeend","<div class='ticketButton'></div>")
    const ticketButton = document.querySelector(".ticketButton");
// Crea los botones
    ticketButton.appendChild(create('button',bottonClass,'imprimir','Imprimir'));
    ticketButton.appendChild(create('button',bottonClass,'cancelar','Cancelar'));
// Codigo de accion de los botones
    document.getElementById('cancelar').addEventListener('click', _ => {
// Recarga el codigo HTML original de la pagina
            location.reload();
        })


    
    










}