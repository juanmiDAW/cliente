//obtenemos el elemento con id anyadir 
var selectorAñadir = document.getElementById("anyadir");

// evento click para añadir tarea
selectorAñadir.addEventListener("click", function () {

    // crear el elemento li para la tarea
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

        //le damos un id al cuerpo de la tabla
        tbody.id = "tabla-body";

        //añadimos el cuerpo a la tabla como ultimo hijo
        tabla.appendChild(tbody);

        //  agregamos la tabla al body del HTML
        document.body.appendChild(tabla);
    }

    //obtenemos el cuerpo de la tabla
    var cuerpo = document.getElementById("tabla-body");
    //creamos una fila en el cuerpo
    var filaBody = cuerpo.insertRow();
    //creamos las celdas de la fila
    var celdaBody = filaBody.insertCell();
    //añadimos el texto a la celda
    celdaBody.textContent = 'predeterminado';

    //evento para editar la celda haciendo doble clic
    celdaBody.addEventListener("dblclick", function (event) {
        //si el elemento clickeado es una celda y tiene un hijo
        if (event.target.tagName === "TD" && event.target.firstChild) {
            //obtenemos la celda sobre la que se hizo clic
            var celda = event.target;
            //obtenemos el texto de la celda
            var textoCelda = celda.firstChild.textContent;
            //creamos un input
            var input = document.createElement("input");
            //le damos un id al input
            input.id = "input";
            //le asignamos el valor del texto de la celda al input
            input.value = textoCelda;
            //reemplazamos el texto por el input
            celda.replaceChild(input, celda.firstChild);
            //obtenemos el inputq
            var selectorInput = document.getElementById("input");
            //evento para guardar el cambio cuando se presiona enter
            selectorInput.addEventListener("blur", function (event) {
                //si el input no tiene el foco
                if (document.activeElement !== input) {
                    //obtenemos el nuevo texto del input
                    var nuevoTexto = input.value;
                    //reemplazamos el input por el texto con el valor modificado
                    celda.replaceChild(document.createTextNode(nuevoTexto), input);
                };

                //evento para guardar el cambio cuando se presiona enter
                input.addEventListener("keyup", function (event) {
                    //si se presiona enter
                    if (event.key === "Enter") {
                        //obtenemos el nuevo texto del input
                        var nuevoTexto = input.value;
                        //reemplazamos el input por el texto con el valor modificado
                        celda.replaceChild(document.createTextNode(nuevoTexto), input);
                    };

                });
            });
        };
    });

    var celdaBody1 = filaBody.insertCell();
    celdaBody1.textContent = 'predeterminado';

    celdaBody1.addEventListener("dblclick", function (event) {
        if (event.target.tagName === "TD" && event.target.firstChild) {
            var celda = event.target;
            var textoCelda = celda.firstChild.textContent;
            var input = document.createElement("input");
            input.id = "input1";
            input.value = textoCelda;
            celda.replaceChild(input, celda.firstChild);
            var selectorInput = document.getElementById("input1");
            selectorInput.addEventListener("blur", function (event) {
                if (document.activeElement !== input) {
                    var nuevoTexto = input.value;
                    celda.replaceChild(document.createTextNode(nuevoTexto), input);
                };
                input.addEventListener("keyup", function (event) {
                    if (event.key === "Enter") {
                        var nuevoTexto = input.value;
                        celda.replaceChild(document.createTextNode(nuevoTexto), input);
                    };

                });
            });
        };
    });

    var celdaBody2 = filaBody.insertCell();
    celdaBody2.textContent = 'predeterminado';

    celdaBody2.addEventListener("dblclick", function (event) {
        if (event.target.tagName === "TD" && event.target.firstChild) {
            var celda = event.target;
            var textoCelda = celda.firstChild.textContent;
            var input = document.createElement("input");
            input.id = "input2";
            input.value = textoCelda;
            celda.replaceChild(input, celda.firstChild);
            var selectorInput = document.getElementById("input2");
            selectorInput.addEventListener("blur", function (event) {
                if (document.activeElement !== input) {
                    var nuevoTexto = input.value;
                    celda.replaceChild(document.createTextNode(nuevoTexto), input);
                };
                input.addEventListener("keyup", function (event) {
                    if (event.key === "Enter") {
                        var nuevoTexto = input.value;
                        celda.replaceChild(document.createTextNode(nuevoTexto), input);
                    };

                });
            });
        };
    });

    var celdaBody3 = filaBody.insertCell();
    var botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    celdaBody3.appendChild(botonEliminar);
    botonEliminar.addEventListener("click", function (event) {
        filaBody.remove();
    });




});