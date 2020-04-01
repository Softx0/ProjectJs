let data = new Array(); // creating array

function add_element(){
    data.push(document.getElementById('cedula').value); // adding element to array
    document.getElementById('cedula').value=''; // Making the text box blank
    display(); // displaying the array elements
}

function display(){
    let str = "";
    for (i=0;i<data.length;i++){ 
        str += data[i] + "<br >";
    }
    document.getElementById('disp').innerHTML = str;
}
