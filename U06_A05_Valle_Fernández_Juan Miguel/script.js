//obtencion de los elementos con la id correspondiente
var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");

// se añade evento click al elemento
boton1.addEventListener('click', function () {
    //si el elemento contiene la clase ocultar..
    if (p1.classList.contains("ocultar")) {
        //se elimina la clase ocultar
        p1.classList.remove("ocultar");
        //si no...
    } else {
        //se le añade al elemento la clase ocultar
        p1.classList.add("ocultar");
    }
});

boton2.addEventListener('click', function () {
    if (p2.classList.contains("ocultar")) {
        p2.classList.remove("ocultar");
    } else {
        p2.classList.add("ocultar");
    }
});

boton3.addEventListener('click', function () {
    if (p3.classList.contains("ocultar")) {
        p3.classList.remove("ocultar");
    } else {
        p3.classList.add("ocultar");
    }
});