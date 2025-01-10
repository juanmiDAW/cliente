const elemento = document.getElementById('elemento');
//con el evento load se activara cuando todo el html halla sido correctamente cargado
window.addEventListener('load',function(event){
    //cuando este cargada correctamente se mostrará este mensaje
    elemento.innerHTML ="<h1>Bienvenid@</h1>";
})