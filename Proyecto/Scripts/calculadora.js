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
    
    multiplicacion = primerValor * segundoValor;
    console.log(multiplicacion);
    document.getElementById("resultado").innerHTML = "La multiplicación de estos valores es: " + multiplicacion;
}

function dividir() {
    
    division = primerValor / segundoValor;
    console.log(division);
    document.getElementById("resultado").innerHTML = "La división de estos valores es: " + division;
}