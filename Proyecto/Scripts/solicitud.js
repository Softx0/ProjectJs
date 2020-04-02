// let cedula = new Array();
// let nombre = new Array();
// let edad = new Array();
// let direccion = new Array();
// let telefono = new Array();
// let email = new Array();

// let almostArray = new Array();

// function add_element(){

//      let myCedula = document.getElementById('cedula').value;
//     cedula.push(document.getElementById('cedula').value); 
//     document.getElementById('cedula').value = '';
    
//      let myNombre = document.getElementById('nombre').value;
//     nombre.push(document.getElementById('nombre').value); 
//     document.getElementById('nombre').value = '';

//      let myEdad = document.getElementById('edad').value;
//     edad.push(document.getElementById('edad').value); 
//     document.getElementById('edad').value = '';

//      let myDireccion = document.getElementById('direccion').value;
//     direccion.push(document.getElementById('direccion').value); 
//     document.getElementById('direccion').value = '';

//      let myTelefono = document.getElementById('telefono').value;
//     telefono.push(document.getElementById('telefono').value); 
//     document.getElementById('telefono').value = '';

//      let myEmail = document.getElementById('email').value;
//     email.push(document.getElementById('email').value); 
//     document.getElementById('email').value = '';
    
    
//     almostArray = [myCedula, myNombre, myEdad, myDireccion, myTelefono, myEmail];
//     console.log(almostArray);


//     display(); 
// }


// function display(){

//     let str1 = "";

//     for (let i = 0; i < almostArray.length; i++){
//         for (let j = 0; j < almostArray.length; j++){
//             if (i == j){
//                 str1 += almostArray[i][j];
//             }
            
//         }
//     }

    // for (let i = 0; i < 5; i++){ 
    //     str1 += cedula[i] + " ";
    //     for (let j = 0; j < 5; j++){
    //         str1 += nombre[j] + " ";
    //         for (let k = 0; k < 5; k++){
    //             str1 += edad[k] + " ";
    //             for (let m = 0; m < 5; m++){
    //                 str1 += direccion[m] + " ";
    //                 for (let n = 0; n < 5; n++){
    //                     str1 += telefono[n] + " ";
    //                     for (let o = 0; o < 5; o++){
    //                         str1 += email[o] + " ";
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //  }




//      document.getElementById('disp').innerHTML = str1;
// }






// $(document).ready(function() {
//     //obtenemos el valor de los input
    
//     $('#adicionar').click(function() {
//         let nombre = document.getElementById("nombre").value;
//         let apellido = document.getElementById("apellido").value;
//         let cedula = document.getElementById("cedula").value;
//         let i = 1; //contador para asignar id al boton que borrara la fila
//         let fila = '<tr id="row' + i + '"><td>' + nombre + '</td><td>' + apellido 
//         + '</td><td>' + cedula + '</td><td><button type="button" name="remove" id="' + i 
//         + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; 
//         //esto seria lo que contendria la fila

//         i++;
    
//         $('#mytable tr:first').after(fila);
//         $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
//         let nFilas = $("#mytable tr").length;
//         $("#adicionados").append(nFilas - 1);
//         //le resto 1 para no contar la fila del header
//         document.getElementById("apellido").value ="";
//         document.getElementById("cedula").value = "";
//         document.getElementById("nombre").value = "";
//         document.getElementById("nombre").focus();
//     });


//     $(document).on('click', '.btn_remove', function() {
//         let button_id = $(this).attr("id");
//         //cuando da click obtenemos el id del boton
//         $('#row' + button_id + '').remove(); //borra la fila
//         //limpia el para que vuelva a contar las filas de la tabla
//         $("#adicionados").text("");
//         let nFilas = $("#mytable tr").length;
//         $("#adicionados").append(nFilas - 1);
//       });
//     });


function guardar(){
   
    let myCedula = document.getElementById('cedula').value;
    let myNombre = document.getElementById('nombre').value;
    let myEdad = document.getElementById('edad').value; 
    let myDireccion = document.getElementById('direccion').value;
    let myTelefono = document.getElementById('telefono').value;
    let myEmail = document.getElementById('email').value;

    let fila = "<tr> <td> " + myCedula + "</td> <td>" + myNombre + "</td> <td>" 
     + myEdad + "</td> <td>" + myDireccion + "</td> <td>" + myTelefono + "</td> <td>"
     + myEmail + "</td> </tr>";

    let btn = document.createElement("tr");
   	btn.innerHTML = fila;
    document.getElementById("myBody").appendChild(btn);

    document.getElementById('cedula').value = '';
    document.getElementById('cedula').focus();
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('email').value = '';
}
