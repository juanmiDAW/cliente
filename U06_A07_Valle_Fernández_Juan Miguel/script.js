//obtenemos el elemento con id boton
var selectorBoton = document.getElementById('boton');
//le añadimos un evento cuando se haga click al boton
selectorBoton.addEventListener('click', function(){

    // con el document.outerHTML representa el nodo raiz del documento
    var dom = document.documentElement.outerHTML;

    //obtenemos el contenedor con el id div
    var contenedor = document.getElementById('div');

    //en el contenedor añadimos el contenido de toda la estructura del DOM
    contenedor.textContent = dom;
});