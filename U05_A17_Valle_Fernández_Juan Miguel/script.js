window.addEventListener('load', function(){
    document.getElementById('saludo').innerHTML = 'Bienvenid@';
    
    // se utiliza el setTimeout se ejecuta la funcion una sola vez
    this.setTimeout(function(){
        document.getElementById('saludo').innerHTML = '';
    }, 3000);
});

var selector = document.getElementById('formulario');
var nombre = "";
var color = "";
var notificaciones = "";
var selectorNotificaciones = document.querySelectorAll('input[name="notificaciones"]');
selector.addEventListener('submit', function(){
    nombre = document.getElementById('nombre').value;

    color = document.getElementById('color').value;

    selectorNotificaciones.forEach(element => {
        if(element[i].checked){
            notificaciones = element[i].value;
        };
    });
});

