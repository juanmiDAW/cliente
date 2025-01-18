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
                if (validacion !== true) {
                    document.getElementById('errorDni').innerHTML = "(Formato valido: 12345678x)";
                    document.getElementById('dni').style.backgroundColor = "#ffc6ba";
                } else {
                    document.getElementById('dni').style.backgroundColor = "#baffbf";
                    ocument.getElementById('errorDni').innerHTML = "";
                }
                break;

            case "nombre":
                var nombre = document.getElementById('nombre').value;
                var nombreRegExp = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
                validacion = nombreRegExp.test(nombre);
                if (validacion !== true) {
                    document.getElementById('errorNombre').innerHTML = "(Introduzca al menos un nombre y un apellido. Max 2 nombres)";
                    document.getElementById('nombre').style.backgroundColor = "#ffc6ba";
                } else {
                    document.getElementById('nombre').style.backgroundColor = "#baffbf";
                    document.getElementById('errorNombre').innerHTML = "";
                }
                break;

            case "nacimiento":
                var nacimiento = document.getElementById('nacimiento').value;
                var nacimientoRegExp = /^(19|20)\d{2}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/;
                validacion = nacimientoRegExp.test(nacimiento);
                if (validacion !== true) {
                    document.getElementById('errorNacimiento').innerHTML = "(Formato valido: dd/mm/yyyy)";
                    document.getElementById('nacimiento').style.backgroundColor = "#ffc6ba";
                } else {
                    document.getElementById('nacimiento').style.backgroundColor = "#baffbf";
                    document.getElementById('errorNacimiento').innerHTML = "";
                }
                break;

            case "mail":
                var mail = document.getElementById('mail').value;
                var mailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                validacion = mailRegExp.test(mail);
                if (validacion !== true) {
                    document.getElementById('errorMail').innerHTML = "(xxx@yyy.zzz)";
                    document.getElementById('mail').style.backgroundColor = "#ffc6ba";
                } else {
                    document.getElementById('mail').style.backgroundColor = "#baffbf";
                    document.getElementById('errorMail').innerHTML = "";
                }
                break;

            case "url":
                var url = document.getElementById('url').value;
                var urlRegExp = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/[^\s]*)?$/;
                validacion = urlRegExp.test(url);
                if (validacion !== true) {
                    document.getElementById('errorUrl').innerHTML = "(Formato valido: http://www.xxxx.yyy)";
                    document.getElementById('url').style.backgroundColor = "#ffc6ba";
                } else {
                    document.getElementById('url').style.backgroundColor = "#baffbf";
                    ocument.getElementById('errorUrl').innerHTML = "";
                }
                break;

            case "password":
                var password = document.getElementById('password').value;
                var paswordRegExp = /^.{8,10}$/;
                validacion = paswordRegExp.test(password);
                if (validacion !== true) {
                    document.getElementById('errorPassword').innerHTML = "(Debe conetener entre 8 y 10 caracteres)";
                    document.getElementById('password').style.backgroundColor = "#ffc6ba";
                } else {
                    document.getElementById('password').style.backgroundColor = "#baffbf";
                    document.getElementById('errorPassword').innerHTML = "";
                }
                break;

                case "passwordConfirm":
                var passwordConfirm = document.getElementById('passwordConfirm').value;
                var paswordConfirmRegExp = /^.{8,10}$/;
                validacion = paswordConfirmRegExp.test(passwordConfirm);
                if (validacion !== true) {
                    document.getElementById('errorPasswordConfirm').innerHTML = "(Debe conetener entre 8 y 10 caracteres)";
                    document.getElementById('passwordConfirm').style.backgroundColor = "#ffc6ba";
                } else {
                    document.getElementById('passwordConfirm').style.backgroundColor = "#baffbf";
                    document.getElementById('errorPasswordConfirm').innerHTML = "";
                }
                break;





        }
    })
});