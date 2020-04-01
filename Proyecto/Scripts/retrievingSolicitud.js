// let myArray = [];
// let formInputs = document.getElementsByClassName('myInput');

// let formData = Array.prototype.filter.call(formInputs, function(element){
//     return console.log(element.value);
// });

var data = [];
var inputs = document.getElementsByTagName('input');
for(var i=0; i< inputs.length; i++)
{
  data.push(inputs[i].value);
}
console.log(data);