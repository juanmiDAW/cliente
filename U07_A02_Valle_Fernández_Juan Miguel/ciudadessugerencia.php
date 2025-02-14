<?php
$ciudades = ['Huelva', 'Sevilla', 'Córdoba', 'Jaen', 'Cádiz', 'Malaga', 'Granada', 'Almeria'];

$ciudad = $_GET['ciudad'];

if ($ciudad !== ''){
    $sugerencias = [];
    $ciudad = strtolower($ciudad);
    $longitud = strlen($ciudad);

    foreach ($ciudades as $sugerecia){
        if (stristr($sugerecia, substr($ciudad, 0, $longitud))){
            $sugerencias[] = $sugerecia;
        }
    }
    echo json_encode($sugerencias);
}else{
    echo json_encode('');
}