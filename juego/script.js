
// const max_nivel = 10;
const colores = ["rojo", "azul", "verde", "amarillo"];


var secuencia = [];
var secuencia_jugador = [];
var n_secuencia = 4;
var n_random = 0;
var finSecuencia = false;
var nivel = 1;


function empezar() {
    secuencia = [];
    secuencia_jugador = [];
    n_secuencia = 4;
    finSecuencia = false;
    nivel = 1;
    document.getElementById('mensaje').innerHTML = `Nivel: ${nivel}`;
    generarSecuencia(secuencia, n_secuencia);
    mostrarSecuencia();
    console.log(`secu: ${secuencia} jugador: ${secuencia_jugador}`);
    recogerJugador(secuencia_jugador);
}

function generarSecuencia(secuencia,n_secuencia){
    for (i = 0; i < n_secuencia; i++) {
        n_random = Math.floor(Math.random() * 4);
        secuencia.push(colores[n_random]);
    }
}

function mostrarSecuencia() {
    secuencia.forEach((color, indice) => {
        setTimeout(() => {
            const elemento = document.getElementById(color);
            // Subir opacidad imitando a la luz la luz
            elemento.style.opacity = "1";
            setTimeout(() => {
                // Bajar opacidad
                elemento.style.opacity = "0.3";
                // Tiempo que la opacidad permanece subida
            }, 500);
            // Espacio entre cada color
        }, indice * 1000);
    });

   
}


function recogerJugador() {
    const contendorColor = document.querySelectorAll('.rojo, .azul, .verde, .amarillo');
    
    const manejarClick = (event) => {
        var clase = event.target.className;
        secuencia_jugador.push(clase);

        const pulsado = event.target;
        pulsado.style.opacity = '1'
        // console.log(`has pulsado el boton ${clase} ${secuencia_jugador}`);
        setTimeout(()=>{
            pulsado.style.opacity = '0.3';
        },50);
        
        if (secuencia.length === secuencia_jugador.length) {
            finSecuencia = true;
            contendorColor.forEach(contenedor => {
                contenedor.removeEventListener('click', manejarClick);
            });
            
            comprobar();
        }
    };
    
    contendorColor.forEach(contenedor => {
        
        contenedor.addEventListener('click', manejarClick);
         document
        
    });
}

function comprobar() {
    if (finSecuencia === true) {
        var error = false;
        console.log("funcion comprobar");
        for (i = 0; i < secuencia.length; i++) {
            if (secuencia[i] !== secuencia_jugador[i]) {
                error = true;
                break;
            }
        }
    }
    if (error === false) {
        document.getElementById('mensaje').innerHTML = "ENHORABUENA, siguiente nivel...!"
        subirNivel(n_secuencia);
    } else if (error === true) {
        document.getElementById('mensaje').innerHTML = "OOOOooooooOOOooOH, has fallado!"
        console.log(`secu: ${secuencia} jugador: ${secuencia_jugador}`);

    }
}

function subirNivel(n_secuencia) {
    n_secuencia++;
    nivel++;
    secuencia_jugador = [];
    finSecuencia = false;

    setTimeout(()=>{
    document.getElementById('mensaje').innerHTML = `Nivel: ${nivel}`;
    generarSecuencia(secuencia,1);
    setTimeout(() => {
        mostrarSecuencia(secuencia);
        recogerJugador();
    }, 1000);
},2000)
}

