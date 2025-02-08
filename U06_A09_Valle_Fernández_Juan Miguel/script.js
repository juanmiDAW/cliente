
//obtenemos el elemento con el id boton
var selector = document.getElementById("boton");

//agregamos un evento al boton de click
selector.addEventListener("click", function(event){
    
    //obtenemos los valores de los inputs
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;

    //el metodo getElementById nos devolvera true si existe el elemento con el id tabla
    var tabla = document.getElementById("tabla");
    
    //si no existe la tabla la creamos
    if(!tabla){
    tabla = document.createElement("table");
    tabla.id = "tabla";
    tabla.border = "1";
    tabla.style.borderCollapse = "collapse";
    
    //creamos la cabecera de la tabla
    var cabecera = tabla.createTHead();
    //creamos una fila en la cabecera
    var fila = cabecera.insertRow();

    //creamos las celdas de la cabecera
    var celda = fila.insertCell();
    celda.textContent = "Nombre";

    var celda2 = fila.insertCell();
    celda2.textContent = "Edad";
    
    //creamos el cuerpo de la tabla
    var tbody = document.createElement("tbody");
    tbody.id = "tabla-body";
    tabla.appendChild(tbody);

    //  agregamos la tabla al body
    document.body.appendChild(tabla);
    }
    
    //obtenemos el cuerpo de la tabla
    var cuerpo = document.getElementById("tabla-body");
    //creamos una fila en el cuerpo
    var filaBody = cuerpo.insertRow();

    //creamos las celdas del cuerpo
    var celdaBody = filaBody.insertCell();
    celdaBody.textContent = nombre;

    var celdaBody1 = filaBody.insertCell();
    celdaBody1.textContent = edad;
});