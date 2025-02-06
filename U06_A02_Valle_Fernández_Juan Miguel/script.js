//obtencion de los elementos
var anyadir = document.getElementById('anyadir');
var eliminar = document.getElementById('eliminar');

//creacion de prompt para introducir el texto
var texto = prompt('Escribe tu texto aqui.');

//se le añade un evento de click
anyadir.addEventListener('click', function(){
    //creacion del elemento div
    var contenedor = document.createElement('div');
    //se muestra el contenido en el contenedor 
    contenedor.innerHTML = texto;
    //se añade el contenedor como ultimo hijo del body
    document.body.appendChild(contenedor);
});

eliminar.addEventListener('click', function(){
    var div = document.querySelector('div');

    div.remove();
});
