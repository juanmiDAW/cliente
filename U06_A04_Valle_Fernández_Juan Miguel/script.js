//se crea el array prinncipal como local-global del documento
var alumnos = [];
var boton = document.getElementById("boton");
//esta funcion se encarga de recoger los valores y los asigna a las variables
boton.addEventListener('click', function () {
    nombre = document.getElementById("nombre").value.trim();
    //obtencion de valores del modulo1 y notas
    modulo1 = parseInt(document.getElementById("modulo1").value.trim());

    //obtencion de valores del modulo2 y notas
    modulo2 = parseInt(document.getElementById("modulo2").value.trim());

    //obtencion de valores del modulo3 y notas
    modulo3 = parseInt(document.getElementById("modulo3").value.trim());



    //se comprueba si los campos estan vacios
    if (nombre === "" || modulo1 === "" || modulo2 === "" || modulo3 === "") {
        document.getElementById("mostrar").innerHTML = "Error algun campo  esta vacio";
        return;

        //en el caso de no estar vacios se completa los arrays con los valores
    } else if (alumnos.length < 5) {
        class Alumno {
            constructor(nombre, modulo1, modulo2, modulo3) {
                this.nombre = nombre;
                this.modulo1 = modulo1;
                this.modulo2 = modulo2;
                this.modulo3 = modulo3;
            }
        }

        alumnos.push(new Alumno(nombre, modulo1, modulo2, modulo3));

        var mostrar = document.getElementById('contador');

        
        if (!mostrar) {
            var contenedor = document.createElement('span');
            contenedor.id = 'contador';
            contenedor.textContent = `Hay ${alumnos.length} alumnos`;
            document.body.appendChild(contenedor);
        } else {
            mostrar.textContent = `Hay ${alumnos.length} alumnos`;
        }
    }


    if (alumnos.length === 5) {

        var tabla = document.createElement("table");
        var cabecera = document.createElement("thead");
        var fila = document.createElement("tr");

        var celdaCabecera = document.createElement("th");
        celdaCabecera.textContent = "Nombre";
        fila.appendChild(celdaCabecera);

        celdaCabecera = document.createElement("th");
        celdaCabecera.textContent = "Modulo 1";
        fila.appendChild(celdaCabecera);

        celdaCabecera = document.createElement("th");
        celdaCabecera.textContent = "Modulo 2";
        fila.appendChild(celdaCabecera);

        celdaCabecera = document.createElement("th");
        celdaCabecera.textContent = "Modulo 3";
        fila.appendChild(celdaCabecera);

        cabecera.appendChild(fila);
        tabla.appendChild(cabecera);

        alumnos.forEach(element => {
            var fila = document.createElement("tr");
            var celda = document.createElement("td");
            celda.textContent = element.nombre;
            fila.appendChild(celda);

            var celda1 = document.createElement("td");
            celda1.textContent = element.modulo1;
            fila.appendChild(celda1);

            var celda2 = document.createElement("td");
            celda2.textContent = element.modulo2;
            fila.appendChild(celda2);

            var celda3 = document.createElement("td");
            celda3.textContent = element.modulo3;
            fila.appendChild(celda3);

            tabla.appendChild(fila);
        });

        document.body.appendChild(tabla);
    }
});