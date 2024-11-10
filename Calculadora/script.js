//declaracion y inicializacion de variables 
var valores = "";
var operador = "";
var validar = "";
//creacion de expresion regular, para validad la entrada. valida numero deguis de , 
const EXPRESION = /^(-?\d+,)*-?\d+$/;
//en esta funcion optenemos los valores del imput 
function calcular() {
    valores = document.getElementById('valor').value;
    operador = document.getElementById('operador').value;
    //con .test validamos el valor por la expresion regular, devolvera true si es apto y si no es apto false.
    validar = EXPRESION.test(valores);
    //si pasa la validacion se realiza la operacio, se imprime en el elemento con id parrafo el h1 que contiene un eval()
    //el eval() sirve para ejecutar codigo js mediante cadena de caracteres
    //se le pasa la variable operador que contiene el operador que concuerda con el nombre de la funciones definidas ms abajo
    //se le pasa la variable valores con los valores validados
    if (validar === true) {
        document.getElementById('resultado').innerHTML = "<h1> Resultado: " + eval(`${operador}(${valores});`) + "</h1>";
    } else {
        // en el caso de no pasar la validacion entrara en else y devolvera este texto
        document.getElementById("resultado").innerHTML = "<h1> Formato incorrecto </h1>";
    }
}
// con ...args le decimos a la funcion que le vamos a pasar un numero de parametro indeterminados
function sumar(...args) {
    resultado = 0;
    for (let i in args) {
        //sumamos los valores introducidos y los asignamos a la variable resultado
        resultado += args[i];
    }
    // se retorna resultado
    return resultado;
}

function restar(...args) {
    //le decimos que rulstado sea el primer valor pasado, para asi evitar el error al estar vacio de restar 0 - valor
    resultado = args[0];
    for (let i in args) {
        //con continie le decimos que salte a la siguiente vuelta si el indice es 0 sin realizar la operacion, ya que se asigno antes
        if(i == 0)continue;
        resultado -= args[i];
    }

    return resultado;
}

function multiplicar(...args) {
    //se le asigna a resultado 1, porque si es vacio o 0, multiplica por 0 y daria 0 y todas ls operaciones se multiplicarian por 0
    resultado = 1;
    for (let i in args) {
        resultado *= args[i];
    }
    return resultado;
}

function dividir(...args) {
    //aqui lo mismo que en caso anteriores se la asigna el primer valor pasado, evitando la dividir por 0
    resultado = args[0];
    //si la longitud del array es mayor que 1 se realiza operacion, si no entra al else
    if (args.length > 1)
        for (let i in args) {
    //con la instruccion continue pasamos a la siguiente vuelta del bucle sin hacer la operacion
            if (i == 0) continue;
            resultado /= args[i];
        //si el indice es menor que 1, sale menaje error siguiente
        } else {
        resultado = document.getElementById('resultado').innerHTML = "<h1 style=color:red;> Expresion mal formada, no se puede divir con solo valor</h1>";
    }
    return resultado;
}