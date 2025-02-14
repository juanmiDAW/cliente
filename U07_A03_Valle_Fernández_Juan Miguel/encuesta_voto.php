<?php
// definir el archivo de votos
$archivo = "resultados.txt";


// leer el contenido del archivo
$contenido = file_get_contents($archivo);
//se convierte en un array por cada separador
$equipos = explode("||", $contenido);
//obtencion de la variable que viene  de JS
$dato = $_GET['voto'];
//segun cada caso de valor de la variable
switch ($dato) {
    case 'RealMadrid':
        $equipos[0]+= 1;
        break;
    case 'Barcelona':
        $equipos[1]+= 1;
        break;
    case 'AtleticodeMadrid':
        $equipos[2]+= 1;
        break;
    case 'Sevilla':
        $equipos[3]+= 1;
        break;
};

//volvemos de pasar de array a cadena
file_put_contents($archivo, implode("||", $equipos));

//obtenemos la suma de votos totales
$totalVotos = $equipos[0] + $equipos[1] + $equipos[2] + $equipos[3];

//creacion del array porcentajes
$porcentajes = [];

//si los votos totales es mayor a 0
if ($totalVotos > 0) {
    //contador de indice
    $indice = 0;
    //recorremos los votos de cada equipo
    foreach ($equipos as $voto) {
        //creacion del array con los nombres de los euipos
        $nombres = ['RealMadrid', 'Barcelona', 'AtleticoDeMadrid', 'Sevilla'];
        
        
        if ($voto === 0) {
            $porcentajes[$nombres[$indice]] = 0;
        };

        //al array de poncentajes se le añade la clave y el valor del el porcentaje de los votos
        $porcentajes[$nombres[$indice]] = round(($voto / $totalVotos) * 100, 2);

        //se aumenta en uno el indice
        $indice++;
    }
};


//se codifica a JSON para su envio
echo json_encode([
    "status" => "success",
    "porcentajes" => $porcentajes
]);
