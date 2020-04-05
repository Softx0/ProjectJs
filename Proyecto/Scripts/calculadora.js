//Se obtienen los dos valores ingresados
let primerValor = 0;
let segundoValor = 0;


function getValores() {
    primerValor = Number(document.getElementById("primerValor").value);
    segundoValor = Number(document.getElementById("segundoValor").value);
}

function sumar() {
   
    suma = primerValor + segundoValor;
    console.log(suma);
    document.getElementById("resultado").innerHTML = "La sumatoria de estos valores es: " + suma;
}

function restar() {
    
    resta = primerValor - segundoValor;
    console.log(resta);
    document.getElementById("resultado").innerHTML = "La resta de estos valores es: " + resta;
}

function multiplicar() {
    
    suma = primerValor + segundoValor;
    console.log(suma);
    document.getElementById("resultado").innerHTML = "La sumatoria de estos valores es: " + suma;
}