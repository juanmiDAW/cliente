var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");

boton1.addEventListener('click', function () {
    if (p1.classList.contains("ocultar")) {
        p1.classList.remove("ocultar");
    } else {
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