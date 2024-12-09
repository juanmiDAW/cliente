//cosntante en la que se alamacena los cuatros colores del juego.
const colores = ["rojo", "azul", "verde", "amarillo"];

//declaracion de todas las variables globales
var secuencia = [];
var secuencia_jugador = [];
var n_secuencia = 4;
var n_random = 0;
var finSecuencia = false;
var nivel = 1;

//funcion principal en la que se inicia el juego  y tambien se reinicia las variables.
function empezar() {
    secuencia = [];
    secuencia_jugador = [];
    n_secuencia = 4;
    finSecuencia = false;
    nivel = 1;
    //se muestra en el contenedor con la clase mensaje el nivel en que se encuentra
    document.getElementById('mensaje').innerHTML = `Nivel: ${nivel}`;
    //llama a la funcion para generar la funcion de la maquina
    generarSecuencia(secuencia, n_secuencia);
    //muestra la secuancia generada
    mostrarSecuencia();
    //recoge la secuencia introducida por el usuario
    recogerJugador(secuencia_jugador);
}

//crea la secuancia de la maquina
function generarSecuencia(secuencia,n_secuencia){
    //bucle for que genera tantos numeros alearotios entre el 0 y el 4 como numeros definido de la secuencia
    for (i = 0; i < n_secuencia; i++) {
        n_random = Math.floor(Math.random() * 4);
    //el numero aleatorio sera el indice del array de colores y ese indice su valor sera un color
    //se almacena al final del array de secuncia
        secuencia.push(colores[n_random]);
    }
}

//muestra la secuancia creada para la maquina
function mostrarSecuencia() {
    //recorre indice del array, funcion flecha que se le indica el elemento con el que se esta iterando y el indice
    secuencia.forEach((color, indice) => {
        setTimeout(() => {
            //se alamacena en un constante y se referencia el color iterado
            const elemento = document.getElementById(color);
            // se sube la opacidad al maximo
            elemento.style.opacity = "1";
            setTimeout(() => {
                // se baja a la opacidad de origen
                elemento.style.opacity = "0.3";
                // tiempo que permanence la opacidad subida
            }, 500);
            // tiempo entre color y color para mostrarse
        }, indice * 1000);
    });

   
}

//funcion que recoge la secuncia del jugador 
function recogerJugador() {
    //selecciona los contenedores con la clase a la que pertenece
    const contendorColor = document.querySelectorAll('.rojo, .azul, .verde, .amarillo');
    
    //funcion que se ejecuta cada vez que el usuario pulse sobre los contenedore selecionados
    const manejarClick = (event) => {
        //se obtiene la clae sobre el elemento que se pulso
        var clase = event.target.className;
        //se alamacena al final del array que guarda la secuencia del usuario
        secuencia_jugador.push(clase);

        //sobre el elemento pulsado se aumenta la opacidad
        const pulsado = event.target;
        pulsado.style.opacity = '1'
        //Despues de ser pulsado se vuelve al origen a los 50ms
        setTimeout(()=>{
            pulsado.style.opacity = '0.3';
        },50);
        
        //si la lonngituda de la secuencia introducida por el usuaio es igual a la de la mmaquina
        if (secuencia.length === secuencia_jugador.length) {
            //se pone la variable finde la secuencia a true
            finSecuencia = true;
            //se desactiva los eventos
            contendorColor.forEach(contenedor => {
                contenedor.removeEventListener('click', manejarClick);
            });
            
            //y se llama a la funcion que compruba si es correcta la secuencia
            comprobar();
        }
    };
    // se vuelve activar para la siguiente secuencia
    contendorColor.forEach(contenedor => {
        
        contenedor.addEventListener('click', manejarClick);
         document
        
    });
}

//comprueba si coincide la secuncia del usuario con la de la maquina
function comprobar() {
    //si la secuencia ha ternminado..
    if (finSecuencia === true) {
        //se crea la variable error para saber si hay un error o no
        var error = false;
        //se itera sobre las dos secuncias y se comprueba si los indices tienen el mismo valor 
        for (i = 0; i < secuencia.length; i++) {
            //si no son iguales...
            if (secuencia[i] !== secuencia_jugador[i]) {
                //se pone error a true y se termina el bucle
                error = true;
                break;
            }
        }
    }

    //si no hay ningun error...
    if (error === false) {
        //mensaje de enhorabuena...
        document.getElementById('mensaje').innerHTML = "ENHORABUENA, siguiente nivel...!";
        // y se llama a la funcion que sube de nivel
        subirNivel(n_secuencia);
        //en el caso de un error
    } else if (error === true) {
        //mensaje de fallo y se indica hasta que nivel llego
        document.getElementById('mensaje').innerHTML = "OOOOooooooOOOooOH, has fallado! Te quedaste en el nivel: " + nivel;
        console.log(`secu: ${secuencia} jugador: ${secuencia_jugador}`);

    }
}

//funcion que se encarga de incrementar el nivel y el numero de la secuencia
function subirNivel(n_secuencia) {
    //se incrementa en 1 la secuencia
    n_secuencia++;
    //se incrementa en 1 el nivel
    nivel++;
    //se reinicia las variables
    secuencia_jugador = [];
    finSecuencia = false;

    //tiempo de separacion entre nivel y nivel del 1000ms
    setTimeout(()=>{
    //se indica el nivel
    document.getElementById('mensaje').innerHTML = `Nivel: ${nivel}`;
    //llamda a la funcion de generar la secuncia de la maquina, se le pasa por parametro asi itera una sola vez y solo añade un color 
    generarSecuencia(secuencia,1);
    setTimeout(() => {
        mostrarSecuencia(secuencia);
        recogerJugador();
    }, 1000);
},2000)
}

