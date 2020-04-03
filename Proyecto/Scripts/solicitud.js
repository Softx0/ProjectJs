let arrayCedula = new Array();
let arrayNombre = new Array();
let arrayEdad = new Array();
let arrayDireccion = new Array();
let arrayTelefono = new Array();
let arrayEmail = new Array();

let arrayCategoria = new Array();
arrayCategoria = ['NIETO', 'HIJO', 'PADRE', 'ABUELO'];

let cantidad = 0;
const btnCantidad = document.getElementById("button1");
const btnAgregar = document.getElementById("btn-agregar");
const btnEnviar = document.getElementById("btn-enviar");

function getCantidad() {
    cantidad = (Number(document.getElementById("cantSolicitud").value));
    console.log(cantidad);
    btnCantidad.setAttribute('disabled', '');
    document.getElementById('cantSolicitud').value = '';
}

function add_element() {

    let cedula = document.getElementById('cedula').value;
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let email = document.getElementById('email').value;

    if (cedula != "" && nombre != "" && edad != "" && email != "") {

        while (arrayCedula.length <= cantidad) {
            arrayCedula.push(document.getElementById('cedula').value);
            document.getElementById('cedula').value = '';
            console.log(arrayCedula);
            break;
        }

        while (arrayNombre.length <= cantidad) {
            arrayNombre.push(document.getElementById('nombre').value);
            document.getElementById('nombre').value = '';
            console.log(arrayNombre);
            break;
        }

        while (arrayEdad.length <= cantidad) {
            arrayEdad.push(document.getElementById('edad').value);
            document.getElementById('edad').value = '';
            console.log(arrayEdad);
            break;
        }

        while (arrayDireccion.length <= cantidad) {
            arrayDireccion.push(document.getElementById('direccion').value);
            document.getElementById('direccion').value = '';
            console.log(arrayDireccion);
            break;
        }

        while (arrayTelefono.length <= cantidad) {
            arrayTelefono.push(document.getElementById('telefono').value);
            document.getElementById('telefono').value = '';
            console.log(arrayTelefono);
            break;
        }

        while (arrayEmail.length <= cantidad) {
            arrayEmail.push(document.getElementById('email').value);
            document.getElementById('email').value = '';
            console.log(arrayEmail);
            break;
        }

        if (arrayEmail.length == cantidad) {
            btnEnviar.removeAttribute('disabled');
            btnAgregar.setAttribute('disabled', '');
        }
    }
}

function display() {

    let row0 = document.getElementById("row0");
    let row1 = document.getElementById("row1");
    let row2 = document.getElementById("row2");
    let row3 = document.getElementById("row3");
    let row4 = document.getElementById("row4");
    let row5 = document.getElementById("row5");
    let row6 = document.getElementById("row6");


    if (arrayCedula.length == cantidad) {
        for (let index = 0; index < arrayCedula.length; index++) {
            let n = 1;
            let cell = row0.insertCell(n);
            cell.innerHTML = arrayCedula[index];
            n++;
        }
    }
    if (arrayNombre.length == cantidad) {
        for (let index = 0; index < arrayNombre.length; index++) {
            let n = 1;
            let cell = row1.insertCell(n);
            cell.innerHTML = arrayNombre[index];
            n++;
        }
    }
    if (arrayEdad.length == cantidad) {
        for (let index = 0; index < arrayEdad.length; index++) {
            let n = 1;
            let cell = row2.insertCell(n);
            cell.innerHTML = arrayEdad[index];
            n++;

            let m = 1;
            let cell2;
            switch ((arrayEdad[index] >= 60) ? 0 :
                (40 <= arrayEdad[index] && arrayEdad[index] <= 59) ? 1 :
                    (20 <= arrayEdad[index] && arrayEdad[index] <= 39) ? 2 : 3) {
                case 0:
                    cell2 = row6.insertCell(m);
                    cell2.innerHTML = arrayCategoria[3];
                    break;
                case 1:
                    cell2 = row6.insertCell(m);
                    cell2.innerHTML = arrayCategoria[2];
                    break;
                case 2:
                    cell2 = row6.insertCell(m);
                    cell2.innerHTML = arrayCategoria[1];
                    break;
                case 3:
                    cell2 = row6.insertCell(m);
                    cell2.innerHTML = arrayCategoria[0];
                    break;
            }
            m++;
        }
    }
    if (arrayDireccion.length == cantidad) {
        for (let index = 0; index < arrayDireccion.length; index++) {
            let n = 1;
            let cell = row3.insertCell(n);
            cell.innerHTML = arrayDireccion[index];
            n++;
        }
    }
    if (arrayTelefono.length == cantidad) {
        for (let index = 0; index < arrayTelefono.length; index++) {
            let n = 1;
            let cell = row4.insertCell(n);
            cell.innerHTML = arrayTelefono[index];
            n++;
        }
    }
    if (arrayEmail.length == cantidad) {
        for (let index = 0; index < arrayEmail.length; index++) {
            let n = 1;
            let cell = row5.insertCell(n);
            cell.innerHTML = arrayEmail[index];
            n++;
        }
    } else {
        let faltante = cantidad - arrayEmail.length;
        console.log(faltante);
        alert("Deben ingresarse por lo menos " + cantidad + " solicitudes. Faltan " + faltante + ".");
    }
}