document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
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

    window.open(`resultado.html?nombre=${nombre}&mensaje=${mensaje}&color=${color}&asignatura=${lista}&seleccionado=${seleccionado}&preferente=${preferente}&profesor=${profesor}`);

});