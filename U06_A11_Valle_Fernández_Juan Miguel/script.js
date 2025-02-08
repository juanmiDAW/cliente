//creamos la lista de tareas
var listaTareas = document.createElement("ul");
        document.body.appendChild(listaTareas);

        // obtenemos el elemto con id boton para darle un evento
        var boton = document.getElementById("boton");

        // Evento para añadir tarea
        boton.addEventListener("click", function() {
            var tarea = document.getElementById("tarea").value;

            // Crear el elemento li para la tarea
            var li = document.createElement("li");

            // Crear el texto de la tarea
            var texto = document.createTextNode(tarea);

            // Crear el botón de eliminar
            var btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";

            // Evento para eliminar tarea
            btnEliminar.addEventListener("click", function() {
                listaTareas.removeChild(li);
            });

            // Añadir el texto y el botón al li
            li.appendChild(texto);
            li.appendChild(btnEliminar);
            listaTareas.appendChild(li);

        });

        // Evento para editar tarea (doble clic)
        listaTareas.addEventListener("dblclick", function(e) {
            
            // Si el elemento clickeado es un LI y tiene un hijo
            if (e.target.tagName === "LI" && e.target.firstChild) {
                var li = e.target;
                var textoTarea = li.firstChild.textContent;  
                var input = document.createElement("input");
                input.value = textoTarea;
                
                // Reemplazar el texto con el input
                li.replaceChild(input, li.firstChild);

                // Evento para guardar el cambio cuando presionen Enter
                input.addEventListener("keyup", function(event) {
                    if (event.key === "Enter") {
                        var nuevoTexto = input.value;
                        li.replaceChild(document.createTextNode(nuevoTexto), input);
                    }
                });
            }
        });