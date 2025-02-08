//obtenemos el elemento por su id imagen
var selector = document.getElementById('imagen');

//agregamos un evento al elemento, cuando entre el mouse cambia la imagen 
selector.addEventListener('mouseover', function(){

    //al elemento le modificamos el atributo src, con el valor de la ruta de la imagen
    selector.setAttribute('src', 'https://s1.significados.com/foto/pintura-artistica-cke.jpg?class=article');
});

//al salir el mouse de la imagen, se cambia el valor del atributo src al de la imagen de origen
selector.addEventListener('mouseout', function(){
    selector.setAttribute('src', 'https://cdn.pixabay.com/photo/2022/03/01/18/12/yoga-7041809_1280.jpg');
});