var selector = document.querySelector('#formulario');
var todo = true;
var selectorInteres = document.querySelectorAll('input[name="interes"]');

selector.addEventListener('input', function () {

    todo = true;
    // recogemos el nombre y le eliminamos los espacios finales e iniciales
    var nombre = document.getElementById('nombre').value.trim();
    //expresion regular para que exista al menos  3 caracteres
    var regexNombre = /^.{3,}$/;
    //si pasa la validacion o no se muestran estos mensajes
    if (!regexNombre.test(nombre)) {
        document.getElementById('errNombre').innerHTML = 'Formato no válido o campo debe tener al menos 3 caracteres.';
        todo = false;
    } else {
        document.getElementById('errNombre').innerHTML = '';
    }

    // se obtiene la contraseña y se valida mediante expresion regular
    var contraseña = document.getElementById('contraseña').value.trim();
    var regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regexContraseña.test(contraseña)) {
        document.getElementById('errContraseña').innerHTML = 'Debe tener al menos 8 caracteres, incluir una letra mayúscula, una minúscula y un número.';
        todo = false;
    } else {
        document.getElementById('errContraseña').innerHTML = '';
    }

    // se obtiene la fecha y se trimea
    var nacimiento = document.getElementById('nacimiento').value.trim();
    //obtenemos la fecha actual en milisegundos
    var fechaActual = new Date();
    //obtenemos la fecha de nacimiento en milisegundos
    var nacimientoFecha = new Date(nacimiento);

    // validacion de la fecha
    if (nacimiento === "") {
        document.getElementById('errNacimiento').innerHTML = 'Por favor, ingresa tu fecha de nacimiento.';
        todo = false;
    } else if (isNaN(nacimientoFecha.getTime())) {
        document.getElementById('errNacimiento').innerHTML = 'Fecha en formato inválido.';
        todo = false;
    } else {
        // calculo de la mayoria de edad
        var edad = fechaActual.getFullYear() - nacimientoFecha.getFullYear();
        var mes = fechaActual.getMonth() - nacimientoFecha.getMonth();
        if (mes < 0 || (mes === 0 && fechaActual.getDate() < nacimientoFecha.getDate())) {
            edad--;
        }
        // comprobamos si es mayor de edad
        if (edad < 18) {
            document.getElementById('errNacimiento').innerHTML = 'La edad debe ser mayor a 18 años.';
            todo = false;
        } else {
            document.getElementById('errNacimiento').innerHTML = '';
        }
    }

    // obtenemos todos los input de tipo checkbox 
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var seleccionado = Array.from(checkboxes).some(checkbox => checkbox.checked);
    if (!seleccionado) {
        document.getElementById('errInteres').innerHTML = 'Debes seleccionar al menos 1 opción.';
        todo = false;
    } else {
        document.getElementById('errInteres').innerHTML = '';
    }

    // obtenemos el valor de genero
    var genero = '';
    //obtenemos una nodeList con todos los input con name genero
    var selectorGenero = document.querySelectorAll('input[name="genero"]');
    //recorremos toda la lista de nodos y almacenamos el valor del elemento que tiene la propiedad checked
    for (let i = 0; i < selectorGenero.length; i++) {
        if (selectorGenero[i].checked) {
            genero = selectorGenero[i].value;
            break; 
        }
    }
    //si el valor de genero esta vacio...
    if (genero === '') {
        document.getElementById('errGenero').innerHTML = 'Se recomienda seleccionar al menos 1 opción.';
        todo = false;
    } else {
        document.getElementById('errGenero').innerHTML = '';
    }

    // en todos los if en los cuales nos contruye los mesajes de error se encuntra la variable todo
    //si el mensaje es de error se pone a false y si no a true
    // cuando este a true significa que todos los campos son correctos por lo cual se activa el boton
    document.getElementById('boton').disabled = !todo;
});
