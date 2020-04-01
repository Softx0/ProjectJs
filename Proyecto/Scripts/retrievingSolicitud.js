var data = [];
var inputs = document.getElementsByTagName('input');
for(var i=0; i< inputs.length; i++)
{
  data.push(inputs[i].value);
}
console.log(data);