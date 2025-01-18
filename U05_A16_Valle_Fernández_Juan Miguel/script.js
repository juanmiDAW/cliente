const selector = document.getElementById('encuesta');
var inputId = "";
var votos = 0;
var ios = 0;
var android = 0;
var windowsPhone = 0;
var otros = 0;
selector.addEventListener('submit', function (event) {
    event.preventDefault();
    const seleccionado = document.querySelector('input[name="os"]:checked');
    if (seleccionado) {
        votos++;
        switch (seleccionado.value) {
            case 'ios':
                ios++;
                break;

            case 'android':
                android++;
                break;

            case 'windowsPhone':
                windowsPhone++;
                break;

            case 'otros':
                otros++;
                break;
        }

        console.log(ios);
        console.log(votos);
        var media_ios = parseInt((ios / votos) * 100);
        var media_android = parseInt((android / votos) * 100);
        var media_windowsPhone = parseInt((windowsPhone / votos) * 100);
        var media_otros = parseInt((otros / votos) * 100);


        console.log(media_ios);
        document.getElementById('r_ios').value = media_ios;
        document.getElementById('r_android').value = media_android;
        document.getElementById('r_windowsPhone').value = media_windowsPhone;
        document.getElementById('r_otros').value = media_otros;
    };
});