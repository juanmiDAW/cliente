const elemento = document.getElementById('elemento');
//cuando pulsamos sobre algun boton del mouse
document.addEventListener('mousedown', function(event){
    //se añadira la imagen al html
elemento.innerHTML = '<img src="meme-faces-funny-pictures-1164-x-1146-a5k82zsnhuk7lidn.webp"></img>';

});
//cuando soltamos algun boton del mouse
document.addEventListener('mouseup', function(event){
    elemento.innerHTML = '<img src="developer-8764523_1280.jpg"></img>';
})