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



function guardarStorage(params) {
    // Encontrar color
    let colorImpreso = document.getElementById("color")
    // Nombre
    let nombre = document.getElementById("name")

    localStorage.setItem("saludo", "¡Hola, bienvenido/a!" + nombre)
    localStorage.setItem("colorImpreso", colorImpreso)
}

function descubrirStorage() {
    document.getElementById("parrafo").innerHTML = "El color que elegiste fue el " + colorImpreso
}

function borrarStorage() {
    localStorage.clear()
}