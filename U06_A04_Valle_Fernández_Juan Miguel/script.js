//se crea el array prinncipal como local-global del documento
var alumnos = [];
//se obtiene el elemnto con el id de boton 
var boton = document.getElementById("boton");
//se le añade un evento que cuando se haga click se llama a la funcion anonima
boton.addEventListener('click', function () {
    //se obtiene el elemento con la id que se le pasa por parametro se sanea con trim y se almacena en la variable
    nombre = document.getElementById("nombre").value.trim();
    modulo1 = parseInt(document.getElementById("modulo1").value.trim());
    modulo2 = parseInt(document.getElementById("modulo2").value.trim());
    modulo3 = parseInt(document.getElementById("modulo3").value.trim());



    //se comprueba si los campos estan vacios
    if (nombre === "" || modulo1 === "" || modulo2 === "" || modulo3 === "") {

        //en el caso de estar vacion se muestra el error
        document.getElementById("mostrar").innerHTML = "Error algun campo  esta vacio";
        return;
        
        //si no esta vacio, se crea un constructor que se rellenara los valores de los atributos con los campos que se introduzcan por el formulario  
    } else if (alumnos.length < 5) {
        class Alumno {
            constructor(nombre, modulo1, modulo2, modulo3) {
                this.nombre = nombre;
                this.modulo1 = modulo1;
                this.modulo2 = modulo2;
                this.modulo3 = modulo3;
            }
        }

        //se añade al final de array alumno un objeto con sus atributos
        alumnos.push(new Alumno(nombre, modulo1, modulo2, modulo3));

        //se obtiene el elemento con la id de contador
        var mostrar = document.getElementById('contador');

        //si no existe el elemento contador, alamcenado en la variable mostrar
        if (!mostrar) {
            //se crea el elemento span
            var contenedor = document.createElement('span');
            //se le añade la id de contador al span
            contenedor.id = 'contador';
            //se le añade al span el contenido
            contenedor.textContent = `Hay ${alumnos.length} alumnos`;
            //se añade el span, al body como ultimo hijo
            document.body.appendChild(contenedor);
        } else {
            // se le añade el contenido al elemento con id contador
            mostrar.textContent = `Hay ${alumnos.length} alumnos`;
        }
    }

// el array ded almunos tiene 5 indices...
    if (alumnos.length === 5) {
    //se crea el elemento de tabla, la cabecera, y la fila  
        var tabla = document.createElement("table");
        var cabecera = document.createElement("thead");
        var fila = document.createElement("tr");

        //se crea la celda de la cabecera
        var celdaCabecera = document.createElement("th");
        //se le añade el contenido a la celda
        celdaCabecera.textContent = "Nombre";
        //se le añade a la fila, la celda de la cabecera
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

        //se le añade a la cebecera la fila como ultimo hijo
        cabecera.appendChild(fila);
        //se le añade a la tabla la cabecera como ultimo hijo
        tabla.appendChild(cabecera);

        //se recorre el array de alumno...
        alumnos.forEach(element => {
            //por cada posicion...
            //se crea la fila y la delda
            var fila = document.createElement("tr");
            var celda = document.createElement("td");
            // se le añade a la celda el contenido
            celda.textContent = element.nombre;
            //se se añade a la fila la celda como ultimo hijo
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

            //se le añade la fila, el elemento tabla como ultimo hijo 
            tabla.appendChild(fila);
        });

        //se le añade la tabla al elemento body como ultimo hijo
        document.body.appendChild(tabla);
    }
});