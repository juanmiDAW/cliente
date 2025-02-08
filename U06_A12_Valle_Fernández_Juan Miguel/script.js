var selectorAñadir = document.getElementById("anyadir");




// Evento para añadir tarea
selectorAñadir.addEventListener("click", function () {

    // Crear el elemento li para la tarea

    var tabla = document.getElementById("tabla");

    //si no existe la tabla la creamos
    if (!tabla) {
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
        celda.textContent = "Col 1";

        var celda2 = fila.insertCell();
        celda2.textContent = "Col 2";

        var celda3 = fila.insertCell();
        celda3.textContent = "Col 3";

        var celda4 = fila.insertCell();
        celda4.textContent = "Opciones";





        //creamos el cuerpo de la tabla
        var tbody = document.createElement("tbody");
        tbody.id = "tabla-body";
        tabla.appendChild(tbody);

        //  agregamos la tabla al body
        document.body.appendChild(tabla);
    }

    var cuerpo = document.getElementById("tabla-body");
    var filaBody = cuerpo.insertRow();
    var celdaBody = filaBody.insertCell();
    celdaBody.textContent = 'predeterminado';
    celdaBody.addEventListener("dblclick", function (event) {
        if(event.target.tagName === "TD" && event.target.firstChild){
        var nuevoTexto = input.value;
        celdaBody.replaceChild(document.createTextNode(nuevoTexto), input);
        }
    });

    var celdaBody1 = filaBody.insertCell();
    celdaBody1.textContent = 'predeterminado';
    celdaBody1.addEventListener("dblclick", function (event) {
        var nuevoTexto = input.value;
        celdaBody1.replaceChild(document.createTextNode(nuevoTexto), input);
    });

    var celdaBody2 = filaBody.insertCell();
    celdaBody2.textContent = 'predeterminado';
    celdaBody2.addEventListener("dblclick", function (event) {
        var nuevoTexto = input.value;
        celdaBody2.replaceChild(document.createTextNode(nuevoTexto), input);
    });

    var celdaBody3 = filaBody.insertCell();
    var botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    celdaBody3.appendChild(botonEliminar);
    botonEliminar.addEventListener("click", function (event) {
        filaBody.remove();
    });


    

});

// Evento para editar tarea (doble clic)
// listaTareas.addEventListener("dblclick", function (e) {

//     // Si el elemento clickeado es un LI y tiene un hijo
//     if (e.target.tagName === "LI" && e.target.firstChild) {
//         var li = e.target;
//         var textoTarea = li.firstChild.textContent;
//         var input = document.createElement("input");
//         input.value = textoTarea;

//         // Reemplazar el texto con el input
//         li.replaceChild(input, li.firstChild);

//         // Evento para guardar el cambio cuando presionen Enter
//         input.addEventListener("keyup", function (event) {
//             if (event.key === "Enter") {
//                 var nuevoTexto = input.value;
//                 li.replaceChild(document.createTextNode(nuevoTexto), input);
//             }
//         });
//     }
// });