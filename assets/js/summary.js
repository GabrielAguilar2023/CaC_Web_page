function crear (elemento,clases,id,texto){
    
    const algoCreado = document.createElement(elemento);
    algoCreado.classList.add(clases[0],clases[1],clases[2],clases[3],clases[4],clases[5]);
    algoCreado.innerText =texto;
    algoCreado.setAttribute("id",id);
    return algoCreado;
}

function showSummary(){
    clasesBoton = ["w-100","btn","btn-lg","btn-form","buttonColor","mb-3"];
   const linea = document.createElement("hr");
    newBody = document.querySelector("body");
    newBody.innerHTML = "<div class='containerTicket'></div>"


    const containerTicket = document.querySelector(".containerTicket");


    containerTicket.insertAdjacentHTML("afterbegin","<div class='ticket'></div>");


    const ticket = containerTicket.querySelector(".ticket");
    ticket.appendChild(crear('div',["title","title","title","title","title","title"],"",""));
    const title = ticket.querySelector(".title");
    title.appendChild(crear("h1",["null","null","null","null","null","null"],"","RESUMEN DE COMPRA"));
    title.insertAdjacentHTML("afterend","<hr>");
   
    
    ticket.appendChild(crear('div',["detalle","detalle","detalle","detalle","detalle","detalle"],"",""));
    const detalle = ticket.querySelector(".detalle");
    

    detalle.appendChild(crear('div',["firstRow","firstRow","firstRow","firstRow","firstRow","firstRow"],"",""));
    const firstRow = detalle.querySelector(".firstRow");
    firstRow.insertAdjacentHTML("afterend","<hr>");

    firstRow.appendChild(crear("h5",["null","null","null","null","null","null"],"","Tickets para Conf. Bs.As."))
    firstRow.appendChild(crear("p",["null","null","null","null","null","null"],"","Fecha 15/12/2023 17:30 Hs."))

    
    detalle.appendChild(crear('div',["renglon1","renglon","renglon","renglon","renglon","renglon"],"",""));
    const renglon = detalle.querySelector(".renglon");
    

    renglon.appendChild(crear("h5",["null","null","null","null","null","null"],"","nombre"));
    renglon.appendChild(crear("p",["null","null","null","null","null","null"],"","Gerardo Gabriel Aguilar Pereyra"));
    document.querySelector(".renglon1").insertAdjacentHTML("beforeend","<hr>");
    

    detalle.appendChild(crear('div',["renglon2","renglon","renglon","renglon","renglon","renglon"],"",""));
    

    renglon.appendChild(crear("h5",["null","null","null","null","null","null"],"","email"));
    renglon.appendChild(crear("p",["null","null","null","null","null","null"],"email","gabrielaguilar@hotmail.com.ar"));
    document.querySelector(".renglon2").insertAdjacentHTML("afterend","<hr>");
    

    detalle.appendChild(crear('div',["renglonImportante1","renglonImportante","renglonImportante","renglonImportante","renglonImportante","renglonImportante"],"",""));
    const renglonImportante = detalle.querySelector(".renglonImportante");

    renglonImportante.appendChild(crear("h5",["null","null","null","null","null","null"],"","Cantidad de tickets"));
    renglonImportante.appendChild(crear("p",["null","null","null","null","null","null"],"","3"));
    document.querySelector(".renglonImportante1").appendChild(linea);
    

    detalle.appendChild(crear('div',["renglonImportante2","renglonImportante","renglonImportante","renglonImportante","renglonImportante","renglonImportante"],"",""));
    

    renglonImportante.appendChild(crear("h5",["null","null","null","null","null","null"],"","Total a pagar"));
    
    renglonImportante.appendChild(crear("p",["null","null","null","null","null","null"],"","$500"));

    
    
    














    containerTicket.insertAdjacentHTML("beforeend","<div class='botones'></div>")
    const botones = document.querySelector(".botones");



    
    botones.appendChild(crear('button',clasesBoton,'imprimir','Imprimir'));

    botones.appendChild(crear('button',clasesBoton,'cancelar','Cancelar'));
    

    document.getElementById('cancelar').addEventListener('click', _ => {
        // Recarga el codigo HTML original de la pagina
            location.reload();
        })


    
    










}