//declaracion y incializacion de variables
var x = 0;
var y = 0;
//cuando se presione un tecla del teclado...
document.addEventListener('keydown', function (event) {
    var box = document.getElementById('box');
    //con la propiedad key podremos saber sobre que tecla se ha pulsado
    switch (event.key) {
        //en el caso de ser la flecha hacia arriba se sube 10px
        case 'ArrowUp':
            y -= 10;
            break;
        //en el caso de ser la flecha hacia la derecha se desplaza 10px a la derecha
        case 'ArrowRight':
            x += 10;
            break;
        //en el caso de ser la flecha hacia abajo se baja 10px
        case 'ArrowDown':
            y += 10;
            break;
        //en el caso de ser la flecha hacia la izquierda se desplaza 10px a la izquierda
            case 'ArrowLeft':
            x -= 10;
            break;
    }
//aqui modificamos la propiedad transform del elemento que queremos que actue
    box.style.transform = `translate(${x}px,${y}px)`;
});