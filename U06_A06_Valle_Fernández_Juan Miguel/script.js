//obtenemos el elemento con la id de boton
var selector = document.getElementById('boton');

//le añadimos al boton un evento click
selector.addEventListener('click', function(){
    //cogemos del documento todos los elementos input
    var input = document.querySelectorAll('input');

    //recorremos la lista de todos los elementos 
    input.forEach(element => {
        //por cada elemento...
        //si la propiedad disable tiene valor true
        if(element.disabled){
        
        //ponemos la propiedad disable a false
        element.disabled = false;
        //si no...
        }else{
            //se le pone el valor de true
            element.disabled = true;
        }
    });
});