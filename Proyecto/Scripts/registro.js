let arrayAsignatura = Array();
let arrayParcial = Array();
let arrayPractica = Array();
let arrayFinal = Array();
let table = document.getElementById("table");
let cantidad = 0;
const btnCantidad = document.getElementById("button1");
const btnAgregar = document.getElementById("button2");
const btnEnviar = document.getElementById("button3");

let promedio = document.getElementById("promedio");
let mayor = document.getElementById("mayor");
let menor = document.getElementById("menor");


function getCantidad() {
    cantidad = (Number(document.getElementById("cantAsignatura").value));
    console.log(cantidad);
    btnCantidad.setAttribute('disabled','');
}

function add_element() {

    let parcial = Number(document.getElementById('parcial').value);
    let practica = Number(document.getElementById('practicas').value);
    let final = Number(document.getElementById('final').value);

    if (parcial <= 30 && practica <= 40 && final <= 40) {

        while (arrayAsignatura.length <= cantidad) {
            arrayAsignatura.push(document.getElementById('asignatura').value);
            document.getElementById('asignatura').value = '';
            console.log(arrayAsignatura);
            break;
        }

        while (arrayParcial.length <= cantidad) {

            arrayParcial.push(parcial);
            document.getElementById('parcial').value = '';
            console.log(arrayParcial);
            break;
        }

        while (arrayPractica.length <= cantidad) {

            arrayPractica.push(practica);
            document.getElementById('practicas').value = '';
            console.log(arrayPractica);
            break;
        }

        while (arrayFinal.length <= cantidad) {

            arrayFinal.push(final);
            document.getElementById('final').value = '';
            console.log(arrayFinal);
            break;
        }

        if (arrayFinal.length == cantidad) {
            btnEnviar.removeAttribute('disabled');
            btnAgregar.setAttribute('disabled','');
        }
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



function sumCalificaciones() {
    let asignatura = document.getElementById("selectAsig").value;
    let index = arrayAsignatura.indexOf(asignatura);

    while (index > -1) {
        let notaParcial = arrayParcial[index];
        let notaPractica = arrayPractica[index];
        let notaFinal = arrayFinal[index];

        let sum = notaParcial + notaPractica + notaFinal;
        document.getElementById("sumatoria").innerHTML = "El total de las notas es: " + sum;
        break;
    }
}

function calcPromedio() {
    let nota = document.getElementById("selectNota");
    let strUser = nota.options[nota.selectedIndex].value;
    console.log(strUser);
    if (strUser == 1) {
        let element = 0;
        for (let i = 0; i < arrayParcial.length; i++) {
            element += arrayParcial[i];
        }
        console.log(element,arrayParcial.length);
        let divisor= arrayParcial.length;
        console.log(divisor);

        let promedio = (element / divisor);
        console.log(promedio);
        document.getElementById("promedio").innerHTML = "El promedio de las notas parciales es: " + promedio;
    } else {

        if (strUser == 2) {
            let element = 0;
            for (let i = 0; i < arrayPractica.length; i++) {
                 element += arrayPractica[i];
            }
    
            let promedio = element / (arrayPractica.length);
            document.getElementById("promedio").innerHTML = "El promedio de las notas parciales es: " + promedio;

        } else{
            if (strUser == 3) {
                let element = 0;
                for (let i = 0; i < arrayFinal.length; i++) {
                     element += arrayFinal[i];
                }
        
                let promedio = element / (arrayFinal.length);
                document.getElementById("promedio").innerHTML = "El promedio de las notas parciales es: " + promedio;
            }
        }

    }
}

function getMayor() {
    
    let nota = document.getElementById("selectNota");
    let strUser = nota.options[nota.selectedIndex].value;
    console.log(strUser);
    if (strUser == 1) {

        let max = Math.max.apply(null,arrayParcial);
        console.log(max);

        document.getElementById("mayor").innerHTML = "La mayor nota de las notas parciales es: " + max;
    } else {

        if (strUser == 2) {
            let max = Math.max.apply(null,arrayPractica);
            console.log(max);
            document.getElementById("mayor").innerHTML = "La mayor nota de las notas prácticas es: " + max;

        } else{
            if (strUser == 3) {
                let max = Math.max.apply(null,arrayFinal);
                console.log(max);
                document.getElementById("mayor").innerHTML = "La mayor nota de las notas finales es: " + max;
            }
        }

    }

}

function getMenor() {

    let nota = document.getElementById("selectNota");
    let strUser = nota.options[nota.selectedIndex].value;
    console.log(strUser);
    if (strUser == 1) {

        let min = Math.min.apply(null,arrayParcial);
        console.log(min);
        document.getElementById("menor").innerHTML = "La mayor nota de las notas parciales es: " + min;
    } else {

        if (strUser == 2) {
            let min = Math.min.apply(null,arrayPractica);
            console.log(min);
            document.getElementById("menor").innerHTML = "La mayor nota de las notas prácticas es: " + min;

        } else{
            if (strUser == 3) {
                let min = Math.min.apply(null,arrayFinal);
                console.log(min);
                document.getElementById("menor").innerHTML = "La mayor nota de las notas finales es: " + min;
            }
        }

    }


}
