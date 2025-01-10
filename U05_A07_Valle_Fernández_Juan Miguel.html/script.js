const elemento = document.getElementById('elemento');
//con el evento error se activa cuando la imagen o html no ha podido cargar correctamente
document.getElementById('img').addEventListener('error',function(event){
    //se muestra el mensaje de error 
    elemento.innerHTML = "<h1>error</h1>";
});