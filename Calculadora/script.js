var valores = "";
var operador = "";
var validar ="";
const EXPRESION = /(^\d+,\d)/g;

function calcular() {
    valores = document.getElementById('valor').value;
    operador = document.getElementById('operador').value;
    validar = EXPRESION.test(valores);
    if(validar === true){
        document.getElementById('resultado').innerHTML = "<h1> Resultado: " + eval(`${operador}(${valores});`) + "</h1>";
    } else {
        document.getElementById("resultado").innerHTML = "<h1> Formato incorrecto </h1>";
    }
}

function sumar(...args) {
    resultado = 0;
    for (let i in args) {
        resultado += args[i];
    }

    return resultado;
}
function restar(...args) {
    resultado = 0;
    for (let i in args) {
        resultado -= args[i];
    }

    return resultado;
}

function multiplicar(...args) {
    resultado = 1;
    for (let i in args) {
        resultado *= args[i];
    }
    return resultado;
}
function dividir(...args) {
    resultado = 0;
    for (let i in args) {
        resultado /= args[i];
    }
    return resultado;
}