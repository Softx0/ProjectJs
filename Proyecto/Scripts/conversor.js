function convertirGrados(){
    let e = document.getElementById("conversor-grados-desde");
    let value = e.options[e.selectedIndex].value;
    let text = e.options[e.selectedIndex].text;

    console.log(value, text);

    let r = document.getElementById("conversor-grados-hasta");
    let value1 = r.options[r.selectedIndex].value;
    let text1 = r.options[r.selectedIndex].text;

    console.log(value1, text1);
    let str = text + " " + text1;
    return str;
}

document.getElementById('valores').innerHTML = convertirGrados();