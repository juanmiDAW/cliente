//obtenemos el elelemnto donde se introducira los datos
var selectorInput = document.getElementById('ciudad');

//añadimos el evento para se actualiza al cambiar de estado el input
selectorInput.addEventListener('input', async function(){

    //creacion de la variable donde se alamacenara lo que metemos de dato
    var ciudad = selectorInput.value;

    //creacion de la url donde metemos el valor de los datos obtenidos
    const requestURL = 'ciudadessugerencia.php?ciudad=' + ciudad;
    //creacion de la peticion con el obtjeto Request
    const request = new Request(requestURL);
    //se hace la peticion y hay que esperar a obtener la respuesta y se alamcena la respuesta en la variable response
    const response = await fetch(request);
    //se convierte la respuesta a texto y se alamacena en la variable
    const ciudadText = await response.text();
    //se convierte el de JSON a objeto y se almacena en la variable
    const ciudadResultado = JSON.parse(ciudadText);

    //se muestra el resultado en el elemento con id sugerencias
    document.getElementById('sugerencias').innerHTML = ciudadResultado;

    
});