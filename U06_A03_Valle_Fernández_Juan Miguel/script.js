
//creacion del objeto vehiculos
class vehiculo {
    constructor(marca, modelo, color, anyoFabricacion){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anyoFabricacion = anyoFabricacion;

    }
}

//creacion de un array con las instancias de los coches.
var coche = [
    new vehiculo('seat', 'leon', 'negro', 2018),
    new vehiculo('ford', 'fiesta', 'verde', 2010),
    new vehiculo('peugeot', 'patner', 'rojo', 2012),
    new vehiculo('seat', 'ateca', 'amarillo', 2013),
    new vehiculo('kia', 'picanto', 'azul', 2015)
];

//creacion de variable y se almacena la obtencion del boton con el id de tabla
var crearTabla = document.getElementById('tabla');

// se le añade un evento que cuando se haga click sobre el elemento se realice la funcion anonima
crearTabla.addEventListener('click', function(){

    //creacion de variables, en la que se almacena la creacion de los nodos que componen la tabla 
    var tabla = document.createElement('table');
    var head = document.createElement('thead');
    var fila = document.createElement('tr');
    
    //se crea el elemento de la celda de la cabecera de la tabla
    var th1 = document.createElement('th');
    //se le añade a la celda en contenido 
    th1.textContent = 'Marca';
    //agrega a la fila la celda como ultimo hijo
    fila.appendChild(th1);

    var th2 = document.createElement('th');
    th2.textContent = 'Modelo';
    fila.appendChild(th2);
    
    var th3 = document.createElement('th');
    th3.textContent = 'Color';
    fila.appendChild(th3);
    
    var th4 = document.createElement('th');
    th4.textContent = 'Año de fabricacion';
    fila.appendChild(th4);


//se le añade la fila como ultimo hijo de la cabecera.
    head.appendChild(fila);
//se añade a la tabla la cabecera como ultimo hijo
    tabla.appendChild(head);

    //se recorre el array con las isntancias del objeto coche
    coche.forEach(coche  => {

        //por cada coche, se crea un fila de la tabla
        var filaBody = document.createElement('tr');

        //se crea una celda
        var tdMarca = document.createElement('td');
        // se le añade a la celda el atrobuto marca del objeto coche
        tdMarca.textContent = coche.marca;
        // se le añade a la fila la celda como ultimo hijo
        filaBody.appendChild(tdMarca);

        var tdModelo = document.createElement('td');
        tdModelo.textContent = coche.modelo;
        filaBody.appendChild(tdModelo);

        var tdColor = document.createElement('td');
        tdColor.textContent = coche.color;
        filaBody.appendChild(tdColor);

        var tdAnyoFabricacion = document.createElement('td');
        tdAnyoFabricacion.textContent = coche.anyoFabricacion;
        filaBody.appendChild(tdAnyoFabricacion);

        //se le añade la fila a la tabla como ultimo hijo
        tabla.appendChild(filaBody);

    });

    //se añade al nodo body del documento la tabla como ultimo hijo
    document.body.appendChild(tabla);
    
});