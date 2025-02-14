<?php
//creacion del array que contiene las ciudades
$ciudades = ['Huelva', 'Sevilla', 'Córdoba', 'Jaen', 'Cádiz', 'Malaga', 'Granada', 'Almeria'];
//se obtiene los datos introducidos de la peticion get
$ciudad = $_GET['ciudad'];

//si lo que se introudce no esta vacio..
if ($ciudad !== '') {
    //se crea el array de sugrencias
    $sugerencias = [];
    //se convierte lo introducido a minusculas 
    $ciudad = strtolower($ciudad);
    //se obtiene la longitud de la cadena con el nombre de ciudad
    $longitud = strlen($ciudad);

    //se recorre el array de ciudades
    foreach ($ciudades as $sugerecia) {
        //si la ciudad introducida coincide con alguna de las ciudades del array;;
        if (stristr($sugerecia, substr($ciudad, 0, $longitud))) {
            //se añade al array de sugerencias
            $sugerencias[] = $sugerecia;
        }
    }
    //se convierte el array de sugerencias a formato json
    echo json_encode($sugerencias);
} else {
    //si no se introduce nada se devuelve un array vacio
    echo json_encode('');
}
