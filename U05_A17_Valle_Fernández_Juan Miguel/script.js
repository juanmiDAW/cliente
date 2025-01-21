window.addEventListener('load', function(){
    document.getElementById('saludo').innerHTML = 'Bienvenid@';
    
    // se utiliza el setTimeout se ejecuta la funcion una sola vez
    this.setTimeout(function(){
        document.getElementById('saludo').innerHTML = '';
    }, 3000);
});

var selector = document.querySelector('#formulario');
var nombre = "";
var color = "";
var notificaciones = "";
var selectorNotificaciones = document.querySelectorAll('input[name="notificaciones"]');

var test = false;
selector.addEventListener('input', function(){


    nombre = document.getElementById('nombre').value.trim();
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    test = regex.test(nombre);
    if(test == false || nombre === ""){
        document.getElementById('errNombre').innerHTML = 'Formato no valido o campo vacio.';
    } else {
        document.getElementById('errNombre').innerHTML = '';

    };

    color = document.getElementById('color').value;

    selectorNotificaciones.forEach(element => {
        if(!element.checked){
            document.getElementById('errNotificaciones').innerHTML = 'Falta seleccionar una de las dos opciones.';
        }else if(element.checked){
            notificaciones = element.value;
            document.getElementById('errNotificaciones').innerHTML = '';
        };
    });

    document.getElementById('reNombre').innerHTML = nombre;
    document.getElementById('reColor').innerHTML = color;
    document.getElementById('reNotificaciones').innerHTML = notificaciones;
});

document.getElementById('boton').addEventListener('mouseover',function(){
    document.getElementById('boton').style.backgroundColor = 'red';
})
document.getElementById('boton').addEventListener('mouseout', function () {
    document.getElementById('boton').style.backgroundColor = 'blue'; // Vuelve al color original
});

