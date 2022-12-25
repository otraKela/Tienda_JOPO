window.addEventListener ('load', () => {
    let barsMenuButton = document.querySelector ('.div-bars-menu button');
    let navUser = document.querySelector ('.nav-user');
    let userData = document.querySelector ('.user-data');
    let iCerrarMenu = document.querySelector ('.i-cerrar-menu');

    barsMenuButton.addEventListener ('click', (e) => {
        navUser.style.display = 'block';
    });

    userData.addEventListener ('click', () => {
        navUser.style.display = 'block';
    })

    iCerrarMenu.addEventListener ('click', () => {
        navUser.style.display = 'none';
    })

    
})