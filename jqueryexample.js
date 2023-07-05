 // Añadir una clase de resaltado al hacer clic en un elemento de la lista
 $(document).ready(function () {
    $('#task-list li').on('click', function () {
        $(this).toggleClass('highlight');
    });
});

// Agregar una nueva tarea a la lista
$(document).ready(function () {
    $('#add-task-button').on('click', function () {
        var newTask = $('#new-task-input').val();
        if (newTask !== '') {
            $('#task-list').append('<li>' + newTask + '</li>');
            $('#new-task-input').val('');
        }
    });
});