let select;
let selectedValueDesde;
let valueInput;

let select1;
let selectedValueDesde1;
let valueInput1;

function convertirGrados(){

    select = document.getElementById('conversor-grados'); 
    selectedValueDesde = Number(select.options[select.selectedIndex].value); 
    valueInput = Number(document.getElementById('grados').value);

    switch (selectedValueDesde) {
        
        case 1:
            valueInput = (valueInput * 9/5) + 32;
            document.getElementById('resultado').innerHTML = "El valor convertido de Celsius a Farenheit es: " + Math.round(valueInput);
            break;
        case 2:
            valueInput += 273.15;
            document.getElementById('resultado').innerHTML = "El valor convertido de Celsius a Kelvin es: " + Math.round(valueInput);
            break;
        case 3:
            valueInput = (valueInput - 32) * 5/9;
            document.getElementById('resultado').innerHTML = "El valor convertido de Farenheit a Celsius es: " + Math.round(valueInput);
            break;
        case 4:
            valueInput = (valueInput - 32) * 5/9 + 273.15;
            document.getElementById('resultado').innerHTML = "El valor convertido de Farenheit a Kelvin es: " + Math.round(valueInput);            
            break;
        case 5:
            valueInput -= 273.15;
            document.getElementById('resultado').innerHTML = "El valor convertido de Kelvin a Celsius es: " + Math.round(valueInput);
            break;
        default:
            valueInput = (valueInput - 273.15) * 9/5 + 32;
            document.getElementById('resultado').innerHTML = "El valor convertido de Kelvin a Farenheit es: " + Math.round(valueInput);
            break;
    } 
}



function convertirMonedas(){

    select1 = document.getElementById('conversor-monedas'); 
    selectedValueDesde1 = Number(select1.options[select1.selectedIndex].value); 
    valueInput1 = Number(document.getElementById('monedas').value);
    
    switch (selectedValueDesde1) {
        
        case 1:
            valueInput1 *= 0.018;
            document.getElementById('resultado1').innerHTML = "El valor convertido de RD$ a US$ es: " + (valueInput1);
            break;
        case 2:
            valueInput1 *= 0.017;
            document.getElementById('resultado1').innerHTML = "El valor convertido de RD$ a EUR$ es: " + (valueInput1);
            break;
        case 3:
            valueInput1 *= 54.50;
            document.getElementById('resultado1').innerHTML = "El valor convertido de US$ a RD$ es: " + (valueInput1);
            break;
        case 4:
            valueInput1 *= 0.93;
            document.getElementById('resultado1').innerHTML = "El valor convertido de US$ a EUR$ es: " + (valueInput1);
            break;
        case 5:
            valueInput1 *= 62.50;
            document.getElementById('resultado1').innerHTML = "El valor convertido de EUR$ a RD$ es: " + (valueInput1);
            break;
        default:
            valueInput1 *= 1.08;
            document.getElementById('resultado1').innerHTML = "El valor convertido de EUR$ a US$ es: " + (valueInput1);
            break;
    } 
}

