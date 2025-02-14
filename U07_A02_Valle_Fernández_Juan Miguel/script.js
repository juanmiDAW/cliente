var selectorInput = document.getElementById('ciudad');

selectorInput.addEventListener('input', async function(){

    var ciudad = selectorInput.value;

    const requestURL = 'ciudadessugerencia.php?ciudad=' + ciudad;

    const request = new Request(requestURL);
    const response = await fetch(request);
    console.log(response);
    const ciudadText = await response.text();
    const ciudadResultado = JSON.parse(ciudadText);

    document.getElementById('sugerencias').innerHTML = ciudadResultado;

    
});