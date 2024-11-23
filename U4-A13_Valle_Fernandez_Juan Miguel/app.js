var tareas = [];

function anyadir(){
    //se añade al final del array, un objeto con la propiedad de nombre con el valor introducido y una propiedad estado con el valor que se le introduce
    tareas.push({ nombre : document.getElementById("tarea").value , estado : document.getElementById("estado").value});
    //se imprime por consola para ver el estado original del array, ya que con document lo convierte a cadena lo que da por resultado [{object Object}]
    console.log(tareas);
}

function completada(){
    // se capturan los valores introducidos y se asigna a variable
    var entrada_tarea = document.getElementById("tarea").value;
    var entrada_estado = document.getElementById("estado").value;
    //se modifica el valor de estado, con el metodo map() al que se la pasa por parametro una funcion flecha que hace que si el valor de la propiedad nombre es exactamente igual al introducido modica el estado introducido.
    var act_actualizada = tareas.map(tarea => {
        if(tarea.nombre === entrada_tarea){
            tarea.estado = entrada_estado;
        }
    });
    
    
    console.log(tareas);
    
}

function eliminar(){
    var entrada_tarea = document.getElementById("tarea").value;
    //con .findIndex() buscamos cual es el indice al que pertenece la propiedad nombre con el valor introducido
    var indice = tareas.findIndex(tarea => tarea.nombre === entrada_tarea);
    //una vez obtenemos el indice, eliminamos el indice que ordenamos el array de forma que no exista espacios vacios. El 1 indica  que de eliminara un elemento
    if(indice >=0){
        tareas.splice(indice, 1);
        console.log(tareas);
    }

}

function filtrar(){
    //se obtiene el estado introducido
    var estado = document.getElementById("filtro").value;
    //se filtran el array tareas, con la condicion que el valor de la propiedad estado es igual al introducido 
    var filtro = tareas.filter(tarea => tarea.estado === estado);
    console.log(filtro);
}