
var articulos = [];
//funcion para añadir un nuevo elemento al final del array con el metodo .push()
function anyadir() {
    articulos.push(document.getElementById("entrada").value);
    document.getElementById("mostrar").innerHTML = articulos;
}
//funcion para eliminar el primer elemento de array con el metodo .pop()
function eliminiar_primero() {
    articulos.shift();
    document.getElementById("mostrar").innerHTML = articulos;

}
//funcion que elimina el ultimo elemento del array con .pop()
function eliminar_ultimo() {
    articulos.pop();
    document.getElementById("mostrar").innerHTML = articulos;

}
// muestra los 3 primero articulos de la lista con el metodo .slice() que coge desde el indice 0 al 3
function mostrar_3_primeros() {
    // aqui se hace uso de la funcion arrow, a la que no se le pasa parametros y se hace un slice y se le asigna a resultado.
    var resultado = () => articulos.slice(0,3);
    document.getElementById("mostrar2").innerHTML = resultado();
    document.getElementById("mostrar").innerHTML = articulos;

}

