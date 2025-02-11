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

    //se comprueba si los campos estan vacios
    if (nombre === "" || modulo1 === "" || modulo2 === "" || modulo3 === "") {
        document.getElementById("mostrar").innerHTML = "Error algun campo  esta vacio";
        return;

        //en el caso de no estar vacios se completa los arrays con los valores
    } else {
        parametro = [nombre,
            [modulo1, [nota1_1, nota1_2, nota1_3]],
            [modulo2, [nota2_1, nota2_2, nota2_3]],
            [modulo3, [nota3_1, nota3_2, nota3_3]]
        ];

        //se añade los valores al final del array principal
        alumno.push(parametro);

    };

    if (alumno.length == 5) {
        selector.disable = true;
        crearTabla();
    };

});

function crearTabla() {
    //creacion de elemtos de la tabla
    var tabla = document.createElement('table');
//se asignan los atributos de la tabla
    tabla.id = 'tabla';
    tabla.border = "1";
    tabla.style.borderCollapse = 'collapse';
//se crea la cabecera de la tabla
    var cabecera = tabla.createTHead();
//se crean las celdas de la cabecera
    var fila = cabecera.insertRow();
//se asignan los valores a las celdas
    var celda = fila.insertCell();
//se asignan los valores a las celdas
    celda.textContent = "Nombre";

    var celda1 = fila.insertCell();
    celda1.textContent = "Modulo";

    var celda2 = fila.insertCell();
    celda2.textContent = "Nota 1";

    var celda3 = fila.insertCell();
    celda3.textContent = "Nota 2";

    var celda4 = fila.insertCell();
    celda4.textContent = "Nota 3";

    var celda5 = fila.insertCell();
    celda5.textContent = "Modulo 2";

    var celda6 = fila.insertCell();
    celda6.textContent = "Nota 1";

    var celda7 = fila.insertCell();
    celda7.textContent = "Nota 2";

    var celda8 = fila.insertCell();
    celda8.textContent = "Nota 3";

    var celda9 = fila.insertCell();
    celda9.textContent = "Modulo 3";

    var celda10 = fila.insertCell();
    celda10.textContent = "Nota 1";

    var celda11 = fila.insertCell();
    celda11.textContent = "Nota 2";

    var celda12 = fila.insertCell();
    celda12.textContent = "Nota 3";
//se crea el cuerpo de la tabla
    var tbody = document.createElement("tbody");
    tabla.appendChild(tbody);
//se recorre el array alumno 
    alumno.forEach(element => {
        //se crea una fila por cada elemento del array
        var fila = tbody.insertRow();
        //se crea una celda por cada elemento del array
        var celda = fila.insertCell();
        //se obtiene el nombre del alumno
        celda.textContent = element[0]; 
//se recorre el array de asignaturas y obtenemos los valores de las notas
        for (let i = 1; i < element.length; i++) {
            var celda1 = fila.insertCell();
            celda1.textContent = element[i][0]; // Modulo

            var celda2 = fila.insertCell();
            celda2.textContent = element[i][1][0]; // Nota 1

            var celda3 = fila.insertCell();
            celda3.textContent = element[i][1][1]; // Nota 2

            var celda4 = fila.insertCell();
            celda4.textContent = element[i][1][2]; // Nota 3
        }
    });
    //se añade la tabla al body del documento
    document.body.appendChild(tabla);
};
