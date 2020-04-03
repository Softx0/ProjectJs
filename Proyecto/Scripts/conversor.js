let select;
let selectedValueDesde;
let valueInput;

function convertirGrados(){

    select = document.getElementById('conversor-grados'); 
    selectedValueDesde = Number(select.options[select.selectedIndex].value); 
    valueInput = Number(document.getElementById('conversor').value);

    switch (selectedValueDesde) {
        case 1: 
            valueInput = (valueInput * 9/5) + 32;
            console.log('valueInput', valueInput);
            break;
        case 2:
            valueInput += 273.15;
            console.log('celsius a kelvin', valueInput);
            break;
        case 3:
            valueInput = (valueInput - 32) * 5/9;
            console.log('farenheit  celsius', valueInput);
            break;
        case 4:
            valueInput = (valueInput - 32) * 5/9 + 273.15;
            console.log('farenheit a kelvin', valueInput);
            break;
        case 5:
            valueInput -= 273.15;
            console.log('kelvin a celsius', valueInput);
            break;
        default:
            valueInput = (valueInput - 273.15) * 9/5 + 32;
            console.log('kelvin a farenheit', valueInput);
            break;
    } 
}

