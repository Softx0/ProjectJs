let cedula = new Array();
let nombre = new Array();
let edad = new Array();
let direccion = new Array();
let telefono = new Array();
let email = new Array();

function add_element(){

    // let myCedula = document.getElementById('cedula').value;
    cedula.push(document.getElementById('cedula').value); 
    document.getElementById('cedula').value = '';
    
    // let myNombre = document.getElementById('nombre').value
    nombre.push(document.getElementById('nombre').value); 
    document.getElementById('nombre').value = '';

    // let myEdad = document.getElementById('edad').value
    edad.push(document.getElementById('edad').value); 
    document.getElementById('edad').value = '';

    // let myDireccion = document.getElementById('direccion').value
    direccion.push(document.getElementById('direccion').value); 
    document.getElementById('direccion').value = '';

    // let myTelefono = document.getElementById('telefono').value
    telefono.push(document.getElementById('telefono').value); 
    document.getElementById('telefono').value = '';

    // let myEmail = document.getElementById('email').value
    email.push(document.getElementById('email').value); 
    document.getElementById('email').value = '';
    
    display(); 
}


function display(){

    let str1 = "";

    for (let i = 0; i < cedula.length; i++){ 
        str1 += cedula[i] + " ";
        for (let j = 0; j < nombre.length; j++){
            str1 += nombre[j] + " ";
            for (let k = 0; k < edad.length; k++){
                str1 += edad[k] + " ";
                for (let m = 0; m < direccion.length; m++){
                    str1 += direccion[m] + " ";
                    for (let n = 0; n < telefono.length; n++){
                        str1 += telefono[n] + " ";
                        for (let o = 0; o < email.length; o++){
                            str1 += email[o] + " ";
                        }
                    }
                }
            }
        }
     }

     document.getElementById('disp').innerHTML = str1;
}
