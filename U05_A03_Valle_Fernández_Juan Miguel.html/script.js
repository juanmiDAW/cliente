const elemento = document.getElementById('elemento');
//con contextmenu actua cuando pulsamos sobre el boton derecho del mouse
elemento.addEventListener('contextmenu', function(event){
    //con preventDefault cancelamos el evento de contextmenu
    event.preventDefault();
    //mostramos en pantalla el mensage
    elemento.innerHTML = "<h1>boton derecho deshabilitado</h1>";
});