let arrayAsignatura = Array();
let arrayParcial = Array();
let arrayPractica = Array();
let arrayFinal = Array();
let table = document.getElementById("table");

function add_element(){

    arrayAsignatura.push(document.getElementById('asignatura').value); 
    document.getElementById('asignatura').value = '';
    console.log(arrayAsignatura);

    arrayParcial.push(document.getElementById('parcial').value); 
    document.getElementById('parcial').value = '';
    console.log(arrayParcial);

    arrayPractica.push(document.getElementById('practicas').value); 
    document.getElementById('practicas').value = '';
    console.log(arrayPractica);

    arrayFinal.push(document.getElementById('final').value); 
    document.getElementById('final').value = '';
    console.log(arrayFinal);
   
}

function display(){
    let row0 = document.getElementById("row0"); 
    let row1 = document.getElementById("row1"); 
    let row2 = document.getElementById("row2"); 
    let row3 = document.getElementById("row3"); 

    for(let index = 0; index < arrayAsignatura.length; index++){
        let n = 1;
        let cell = row0.insertCell(n);
        cell.innerHTML = arrayAsignatura[index];
        n++;
        }

    for(let index = 0; index < arrayParcial.length; index++){
        let n = 1;
        let cell = row1.insertCell(n);
        cell.innerHTML = arrayParcial[index];
        n++;
        }    

    for(let index = 0; index < arrayPractica.length; index++){
        let n = 1;
        let cell = row2.insertCell(n);
        cell.innerHTML = arrayPractica[index];
        n++;
        }   
        
    for(let index = 0; index < arrayFinal.length; index++){
        let n = 1;
        let cell = row3.insertCell(n);
        cell.innerHTML = arrayFinal[index];
        n++;
        }    
    }


//     let str1 = "";

//     for (let i = 0; i < arrayAsignatura.length; i++){ 
//         str1 += arrayAsignatura[i] + " ";
       
//         for (let j = 0; j < arrayParcial.length; j++){
//             str1 += arrayParcial[j] + " ";
            
        
//             for (let k = 0; k < arrayPractica.length; k++){
//                 str1 += arrayPractica[k] + " ";
            
//                 for (let m = 0; m < arrayFinal.length; m++){
//                     str1 += arrayFinal[m] + " ";
                    
//                     }
//     }
// }
// }
                
                
            
        
     
    //  document.getElementById('disp').innerHTML = str1;

