
async function probabilities() {
    const response = await fetch('https://api.nationalize.io?name=shirley',
        {
            method: 'GET'
        });
    const prob = await response.json();
    document.getElementById("personName").innerHTML = 'Nombre elegido: ' + prob.name
    let countriesAndProbabilities = ""
    prob.country.forEach((element, index) => {
        if (index === prob.country.length - 1) {
            countriesAndProbabilities += element.country_id + ": " + element.probability
        } else {
            countriesAndProbabilities += element.country_id + ": " + element.probability + " - "
        }

    });
    document.getElementById("countries").innerHTML = countriesAndProbabilities
}

probabilities()

var todos = [];

// Obtener elementos del DOM
var todoForm = document.getElementById('todo-form');
var todoInput = document.getElementById('todo-input');
var todoList = document.getElementById('todo-list');

// Función para agregar una tarea
function addTodo() {
    event.preventDefault(); // Evitar el envío del formulario

    var todoText = todoInput.value.trim(); // Obtener el valor de la tarea
    if (todoText !== '') {
        todos.push(todoText); // Agregar la tarea al array

        // Crear un elemento de lista y agregarlo al DOM
        var listItem = document.createElement('li');
        listItem.textContent = todoText;
        listItem.className = 'list-item';
        todoList.appendChild(listItem);

        todoInput.value = ''; // Limpiar el campo de entrada
    }
}

// Evento de envío del formulario
todoForm.addEventListener('submit', addTodo);



