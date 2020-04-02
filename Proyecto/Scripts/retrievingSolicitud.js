let cedula = new Array();
let nombre = new Array();
let edad = new Array();
let direccion = new Array();
let telefono = new Array();
let email = new Array();

function add_element(){ 

    cedula.push(document.getElementById('cedula').value); 
    document.getElementById('cedula').value = '';
    
    nombre.push(document.getElementById('nombre').value); 
    document.getElementById('nombre').value = '';

    edad.push(document.getElementById('edad').value); 
    document.getElementById('edad').value = '';

    direccion.push(document.getElementById('direccion').value); 
    document.getElementById('direccion').value = '';

    telefono.push(document.getElementById('telefono').value); 
    document.getElementById('telefono').value = '';

    email.push(document.getElementById('email').value); 
    document.getElementById('email').value = '';

    display(); 
}

function display(){
    let str = "";
    for (i = 0; i < cedula.length; i++){ 
        str += cedula[i] + "<br >";
    }

    for (i = 0; i < nombre.length; i++){ 
        str += nombre[i] + "<br >";
    }

    for (i = 0; i < edad.length; i++){ 
        str += edad[i] + "<br >";
    }

    for (i = 0; i < direccion.length; i++){ 
        str += direccion[i] + "<br >";
    }

    for (i = 0; i < telefono.length; i++){ 
        str += telefono[i] + "<br >";
    }

    for (i = 0; i < email.length; i++){ 
        str += email[i] + "<br >";
    }

    document.getElementById('disp').innerHTML = str;
}


// let obj = {};

// function add_element(){
//     let form = document.getElementById("solicitudId");
//     form.children.forEach(function(elm){
//         if(elm.type === 'text'){
//             obj[elm.name] = elm.value;
//           }
//       });   
//     console.log(obj);
// }
