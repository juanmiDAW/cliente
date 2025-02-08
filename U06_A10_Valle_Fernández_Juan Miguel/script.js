//obtenemos el elemnto con el id boton
var selector = document.getElementById("boton");

//añadimos al elemento con el id boton un evento click
selector.addEventListener("click", function(){

    //obtenemos los valores de los inputs
    var producto = document.getElementById("producto").value;
    var precio = document.getElementById("precio").value;
    var url = document.getElementById("url").value;
    //creamos un div y le añadimos la clase tarjeta  
    var div = document.createElement("div");
    div.className = "tarjeta";
    //creamos un elemento img y le añadimos el src y la clase imagen
    var img = document.createElement("img");
    img.src = url;
    img.className = "imagen";
    var h3 = document.createElement("h3");
    //creamos un elemento h3 y le añadimos el producto
    h3.innerHTML = producto;
    //creamos un elemento p y le añadimos el precio
    var p = document.createElement("p");
    p.innerHTML = precio;
    //añadimos los elementos al div
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    //añadimos el div al body
    document.body.appendChild(div);

});