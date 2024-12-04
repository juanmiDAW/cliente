const rojo = document.getElementById('rojo').value;
const azul = document.getElementById('azul').value;
const verde = document.getElementById('verde').value;
const amarillo = document.getElementById('amarillo').value;
const max_nivel = 10;
const colores = [rojo, azul, verde, amarillo];


var secuencia = [];
var secuencia_jugador = [];
var gameOver = false;
var n_secuencia = 4;
var n_random = 0;


function empezar(){
    for(i = 0; i <= n_secuencia; i++){
        n_random = Math.floor(Math.random())*4;
        secuencia.push(colores[n_random]);
    }

    for(i = 0; i < secuencia.length; i++){
        var contenedor = document.getElementById(`${secuencia[i]}`);

        contenedor.style.transition = 'opacity 0.5s';
        contenedor.style.opacity = '1';
    }
}

function turno_usuario(){

}