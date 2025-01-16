document.getElementById('formulario').addEventListener('submit', function(){
    var nombre = document.getElementById('nombre').value;
    var mensaje = document.getElementById('mensaje').value;

    const opciones = document.getElementById('color');

    for (let i = 0; i < opciones.clientHeight; i++){
        if(opciones.cheked){
            var color = opciones[i];
        }
    }

    var lista = document.getElementById('lista').value;
    var checkbox =document.getElementById('')

});