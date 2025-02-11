var selector = document.getElementById('boton');
//se crea el array prinncipal como local-global del documento
var alumno = [];

//esta funcion se encarga de recoger los valores y los asigna a las variables

selector.addEventListener('click', function () {

    nombre = document.getElementById("nombre").value.trim();
    //obtencion de valores del modulo1 y notas
    modulo1 = document.getElementById("modulo1").value.trim();
    nota1_1 = parseInt(document.getElementById("nota1_1").value);
    nota1_2 = parseInt(document.getElementById("nota1_2").value);
    nota1_3 = parseInt(document.getElementById("nota1_3").value);

    //obtencion de valores del modulo2 y notas
    modulo2 = document.getElementById("modulo2").value.trim();
    nota2_1 = parseInt(document.getElementById("nota2_1").value);
    nota2_2 = parseInt(document.getElementById("nota2_2").value);
    nota2_3 = parseInt(document.getElementById("nota2_3").value);

    //obtencion de valores del modulo3 y notas
    modulo3 = document.getElementById("modulo3").value.trim();
    nota3_1 = parseInt(document.getElementById("nota3_1").value);
    nota3_2 = parseInt(document.getElementById("nota3_2").value);
    nota3_3 = parseInt(document.getElementById("nota3_3").value);

    if (alumno.length === 5) {
        selector.disable = true;

        var tabla = document.createElement('table');
        tabla.id = 'tabla';
        tabla.border = "1";
        tabla.style.borderCollapse = 'collapse';

        var cabecera = tabla.createTHead();

        var fila = cabecera.insertRow();

        var celda = fila.insertCell();
        celda.textContent = "Nombre";

        var celda1 = fila.insertCell();
        celda.textContent = "Modulo";

        var celda2 = fila.insertCell();
        celda.textContent = "Nota 1";

        var celda3 = fila.insertCell();
        celda.textContent = "Nota 2";

        var celda4 = fila.insertCell();
        celda.textContent = "Nota 3";

        var tbody = document.createElement("tbody");
        tbody.id = "tabla-body";
        tabla.appendChild(tbody);
    
        alumno.forEach(element => {
            
            
        });
    }


    //se llama a la funcion ejecutar para concatenar las funciones

});