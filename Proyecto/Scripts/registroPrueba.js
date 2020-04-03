let array = Array();

 let table = document.getElementById("table");
function addElements() {
    
    array.push(document.getElementById("asignatura").value);
    array.push(document.getElementById("parcial").value);
    array.push(document.getElementById("practicas").value);
    array.push(document.getElementById("final").value);

    imprimir();
}

function imprimir() {
     // rows
     for(let i = 1; i < table.rows.length; i++)
     {
       // cells
       for(let j = 0; j < table.rows[i].cells.length; j++)
       {
           table.rows[i].cells[j].innerHTML = array[i - 1][j];
           
       }
     }
}