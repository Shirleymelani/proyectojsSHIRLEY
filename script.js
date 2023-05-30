function fnShowHiddeData(value) {

    let currentValue = document.getElementById(`${value}`).style.display;

    if (currentValue == "block") {
        document.getElementById(`${value}`).style.display = "none";
    } else {
        document.getElementById(`${value}`).style.display = "block";
    }
};

function fnAddOrRemoveElements() {
    if (document.getElementById('idAgregarRemover').innerHTML == '') {

        const tagHeaderComponent = document.getElementById('idAgregarRemover');

        const tagMainDiv = document.createElement('div');
        tagMainDiv.setAttribute('id', 'idMainDiv');
        tagMainDiv.setAttribute('class', 'col-sm');
        tagHeaderComponent.appendChild(tagMainDiv);
        tagMainDiv.innerHTML = `This Text is added by JS`;

    } else {
        document.getElementById('idAgregarRemover').innerHTML = '';
    }
};

// Objetos
let objAuto = {
    "auto": "Ford",
    "modelo": "Focus",
    "color": "Rojo"
}

// Arrays
let arrColores = ["negro", "blanco", "rojo", "azul"]

// Metodos array
function encontrarColor(color) {
    let colorEncontrado = arrColores.find(elem => elem == color)
    
    
    return colorEncontrado
}

// Encontrar color
let colorImpreso = prompt("Escribí un color: ")

if(encontrarColor(colorImpreso)){
	alert("Se encontró el color!")
} else {
	alert("No se encontró el color :c")
}