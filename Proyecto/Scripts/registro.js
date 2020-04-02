let arrayAsignatura = Array();
let arrayParcial = Array();
let arrayPractica = Array();
let arrayFinal = Array();
let table = document.getElementById("table");
let cantidad = 0;


function getCantidad() {
    cantidad = (Number(document.getElementById("cantAsignatura").value));
    console.log(cantidad);
}

function add_element() {

    let parcial = Number(document.getElementById('parcial').value);
    let practica = Number(document.getElementById('practicas').value);
    let final = Number(document.getElementById('final').value);

    while (arrayAsignatura.length <= cantidad) {
        arrayAsignatura.push(document.getElementById('asignatura').value);
        document.getElementById('asignatura').value = '';
        console.log(arrayAsignatura);
        break;
    }

    if (parcial > 30) {

        document.getElementById('error').innerHTML = "El parcial debe ser menor o igual a 30";
        
    } else {

        while (arrayParcial.length <= cantidad) {

            arrayParcial.push(parcial);
            document.getElementById('parcial').value = '';
            console.log(arrayParcial);
            break;
        }
    }

    if (practica > 40) {

        document.getElementById('error1').innerHTML = "La practica debe ser menor o igual a 40";  

    } else {

        while (arrayPractica.length <= cantidad) {

            arrayPractica.push(practica);
            document.getElementById('practicas').value = '';
            console.log(arrayPractica);
            break;
        }
    }

    if (final > 40) {

        document.getElementById('error2').innerHTML = "La nota final debe ser menor o igual a 40";     

    } else {

        while (arrayFinal.length <= cantidad) {

            arrayFinal.push(final);
            document.getElementById('final').value = '';
            console.log(arrayFinal);
            break;
        }
    }

    if (practica > 40 || final > 40 || parcial > 30){
        arrayAsignatura.pop();
        console.log(arrayAsignatura);
    }
}

function display() {

    let row0 = document.getElementById("row0");
    let row1 = document.getElementById("row1");
    let row2 = document.getElementById("row2");
    let row3 = document.getElementById("row3");
    
    if (arrayAsignatura.length == cantidad) {
        for (let index = 0; index < arrayAsignatura.length; index++) {
            let n = 1;
            let cell = row0.insertCell(n);
            cell.innerHTML = arrayAsignatura[index];
            n++;
        }
    }

    if (arrayParcial.length == cantidad) {
        for (let index = 0; index < arrayParcial.length; index++) {
            let n = 1;
            let cell = row1.insertCell(n);
            cell.innerHTML = arrayParcial[index];
            n++;
        }
    }

    if (arrayPractica.length == cantidad) {
        for (let index = 0; index < arrayPractica.length; index++) {
            let n = 1;
            let cell = row2.insertCell(n);
            cell.innerHTML = arrayPractica[index];
            n++;
        }
    }

    if (arrayFinal.length == cantidad) {
        for (let index = 0; index < arrayFinal.length; index++) {
            let n = 1;
            let cell = row3.insertCell(n);
            cell.innerHTML = arrayFinal[index];
            n++;
        }
    } else {
        let faltante = cantidad - arrayFinal.length;
        console.log(faltante);
        alert("Deben ingresarse por lo menos " + cantidad + " asignaturas. Faltan " + faltante + ".");
    }
}
