let myArray = [];
let formInputs = document.getElementsByClassName('myInput');

let formData = Array.prototype.filter.call(formInputs, function(element){
    return console.log(element.value);
});
