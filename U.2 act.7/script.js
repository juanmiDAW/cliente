nota=prompt("Introduce tu nota.");

if(nota<5){
    document.write("<h1>Suspenso</h1>"); //si nota es mayor igual a 5 y menor a 7
}else if(nota>=5&&nota<7){
    document.write("<h1>Aprobado</h1>");
}else if(nota>=7&&nota<8){
    document.write("<h1>Notable</h1>");
}else if(nota>=8&&nota<10){
    document.write("<h1>Sobresaliente</h1>");
}