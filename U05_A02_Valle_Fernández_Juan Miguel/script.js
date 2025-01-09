
var x = 0;
var y = 0;
document.addEventListener('keydown', function (event) {
    box = document.getElementById('box');

    switch (event.key) {
        case 'ArrowUp':
            y -= 10;
            break;

        case 'ArrowRight':
            x += 10;
            break;
        case 'ArrowDown':
            y += 10;
            break;
        case 'ArrowLeft':
            x -= 10;
            break;
    }

    box.style.transform = `translate(${x}px,${y}px)`;
});