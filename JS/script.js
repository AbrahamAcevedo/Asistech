// Obtener la referencia al elemento HTML con el id 'container'
const container = document.getElementById('container');

// Obtener la referencia al elemento HTML con el id 'Solicitar'
const registerBtn = document.getElementById('register');

// Obtener la referencia al elemento HTML con el id 'login'
const loginBtn = document.getElementById('login');

// Agregar un evento de escucha al botón con id 'Solicitar'
registerBtn.addEventListener('click', () => {
    // Cuando se hace clic en el botón 'Solicitar', agregar la clase 'active' al elemento con id 'container'
    container.classList.add("active");
});

// Agregar un evento de escucha al botón con id 'login'
loginBtn.addEventListener('click', () => {
    // Cuando se hace clic en el botón 'login', remover la clase 'active' al elemento con id 'container'
    container.classList.remove("active");
});