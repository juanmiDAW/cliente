var selector = document.querySelectorAll('input');
var idInput = "";
var validacion = false;

selector.forEach(element => {
    element.addEventListener('input', function (event) {
        idInput = event.target.id;

        switch (idInput) {
            case "dni":
                var dni = document.getElementById('dni').value;
                var dniRegExp = /^\d{8}[A-Za-z]$/;
                validacion = dniRegExp.test(dni);
                if(validacion !== true){
                    document.getElementById('errorDni').innerHTML = "(Formato valido: 12345678x)";
                    document.getElementById('dni').style.backgroundColor = "#ffc6ba";
                } else{
                    document.getElementById('dni').style.backgroundColor = "#baffbf";
                }
                break;

                case "nombre":
                    var nombre = document.getElementById('nombre').value;
                    var nombreRegExp = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
                    validacion = nombreRegExp.test(nombre);
                    if(validacion !== true){
                        document.getElementById('errorNombre').innerHTML = "(Introduzca al menos un nombre y un apellido. Max 2 nombres)";
                        document.getElementById('nombre').style.backgroundColor = "#ffc6ba";
                    } else{
                        document.getElementById('nombre').style.backgroundColor = "#baffbf";
                    }
                    break;

                    case "nacimiento":
                        var nacimiento = document.getElementById('nacimiento').value;
                        var nacimientoRegExp = /^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\d{4}$/;
                        validacion = nacimientoRegExp.test(nacimiento);
                        if(validacion !== true){
                            document.getElementById('errorNacimiento').innerHTML = "(Formato valido: dd/mm/yyyy)";
                            document.getElementById('nacimiento').style.backgroundColor = "#ffc6ba";
                        } else{
                            document.getElementById('nacimiento').style.backgroundColor = "#baffbf";
                        }
                        break;
                    
        }
    })
});