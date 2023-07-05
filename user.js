var users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com' }
  ];

  // Función para obtener los datos de usuario
  function fetchUser(userId) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        var user = users.find(function(user) {
          return user.id === userId;
        });

        if (user) {
          resolve(user);
        } else {
          reject('Usuario no encontrado');
        }
      }, 1000);
    });
  }

  // Función para mostrar los datos de un usuario en el DOM
  function renderUser(user) {
    var userCard = document.createElement('div');
    userCard.className = 'user-card';

    var userId = document.createElement('h3');
    userId.textContent = 'ID: ' + user.id;

    var userName = document.createElement('p');
    userName.textContent = 'Nombre: ' + user.name;

    var userEmail = document.createElement('p');
    userEmail.textContent = 'Email: ' + user.email;

    userCard.appendChild(userId);
    userCard.appendChild(userName);
    userCard.appendChild(userEmail);

    document.getElementById('user-list').appendChild(userCard);
  }

  // Obtener los datos de usuario y mostrarlos en el DOM
  users.forEach(function(user) {
    fetchUser(user.id)
      .then(function(userData) {
        renderUser(userData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });