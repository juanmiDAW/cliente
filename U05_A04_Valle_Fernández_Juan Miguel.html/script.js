const elemento = document.getElementById('elemento');
//si pulsamos algun boton del mouse...
document.addEventListener('mousedown', function () {
    //se cambia el fondo del elemento a amarillo
    elemento.style.backgroundColor = "#FFFF00";
});
//si soltamos algun boton del mouse...
document.addEventListener('keydown', function () {
    //se cambia el fondo del elemento a azul
    elemento.style.backgroundColor = "#CCE6FF";
});
//si movemos el mouse...
document.addEventListener('mousemove', function () {
    //se cambia el fondo del elemento a blanco
    elemento.style.backgroundColor = "#FFFFFF";
});
