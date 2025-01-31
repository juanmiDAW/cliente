var anyadir = document.getElementById('anyadir');
var eliminar = document.getElementById('eliminar');
var texto = prompt('Escribe tu texto aqui.');

anyadir.addEventListener('click', function(){
    var conetenedor = document.createElement('div');
    conetenedor.innerHTML = texto;
    document.body.appendChild(conetenedor);
});

eliminar.addEventListener('click', function(){
    var div = document.querySelector('div');

    div.remove();
});
