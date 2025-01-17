//enlace
var botonEnlace = document.getElementById('enlace');
botonEnlace.addEventListener('click', function(){
    window.location.href = "https://www.google.com";
});


document.getElementById('formulario').addEventListener('submit', function (event) {
    // event.preventDefault();
    //coje el nombre
    var nombre = document.getElementById('nombre').value;
    //coje el mensaje
    var mensaje = document.getElementById('mensaje').value;
    //coje el color
    const opciones = document.querySelectorAll('input[name="color"]');
    //recorre todas las opciones existentes y guarda en la varibale la que tenga la propiedad cheked
    var color = "";
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            color = opciones[i].value;
        }
    }
    //asignatura
    var lista = document.getElementById('lista').value;

    //dias disponibles
    var checkbox = document.querySelectorAll('input[type="checkbox"]');
    var seleccionado = [];
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            seleccionado.push(checkbox[i].value);
        }
    }

    //dia de la semana
    var preferente = document.getElementById('preferente').value;

    //profesor
    var profesor = "";

    switch (lista) {
        case "lengua":
            profesor = "Paco";
            break;
        case "matematicas":
            profesor = "Manuel";
            break;
        case "naturales":
            profesor = "Grabiel";
            break;
        case "musica":
            profesor = "Alfonso";
            break;
    }




    window.open(`resultado.html?nombre=${nombre}&mensaje=${mensaje}&color=${color}&asignatura=${lista}&seleccionado=${seleccionado}&preferente=${utlimo}&profesor=${profesor}`);

});

//dia preferente com predeterminado
var dias_orden = [];
var utlimo = "";
var dias = document.querySelectorAll('input[type="checkbox"]');

dias.forEach(function (dias) {
    dias.addEventListener('change', function () {
        if (dias.checked) {
            dias_orden.push(dias.value);
            utlimo = dias_orden[dias_orden.length - 1];
        } else if (!dias.checked) {
            var indice = dias_orden.indexOf(dias.value);
            dias_orden.splice(indice, 1);
            utlimo = dias_orden[dias_orden.length - 1];

        }
    });
});

var colores = document.querySelectorAll('input[type="radio"]');
colores.forEach(function (colores) {
    colores.addEventListener('click', function () {
        switch (colores.value) {
            case "rojo":
                document.getElementsByTagName('form')[0].style.backgroundColor = "red";
                break;
            case "verde":
                document.getElementsByTagName('form')[0].style.backgroundColor = "green";
                break;
            case "azul":
                document.getElementsByTagName('form')[0].style.backgroundColor = "blue";
                break;
        }
    })
});
