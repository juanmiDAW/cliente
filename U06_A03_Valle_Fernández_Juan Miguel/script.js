class vehiculo {
    constructor(marca, modelo, color, anyoFabricacion){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anyoFabricacion = anyoFabricacion;

    }
}

var coche = [
    new vehiculo('seat', 'leon', 'negro', 2018),
    new vehiculo('ford', 'fiesta', 'verde', 2010),
    new vehiculo('peugeot', 'patner', 'rojo', 2012),
    new vehiculo('seat', 'ateca', 'amarillo', 2013),
    new vehiculo('kia', 'picanto', 'azul', 2015)
];

var crearTabla = document.getElementById('tabla');

crearTabla.addEventListener('click', function(){

    var tabla = document.createElement('table');
    var head = document.createElement('thead');
    var fila = document.createElement('tr');
    
    var th1 = document.createElement('th');
    th1.textContent = 'Marca';
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



    head.appendChild(fila);
    tabla.appendChild(head);

    coche.forEach(coche  => {
        var filaBody = document.createElement('tr');

        var tdMarca = document.createElement('td');
        tdMarca.textContent = coche.marca;
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

        tabla.appendChild(filaBody);

    });

    document.body.appendChild(tabla);
    
});