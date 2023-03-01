		// Hamburger Menu
    const menuToggle = document.querySelector('.menu-toggle input');
    const nav = document.querySelector('nav ul');
  
    menuToggle.addEventListener( 'click', function () {
    nav.classList.toggle( 'slide');
    });
    
    // dark-mode

    const darkModeBtn = document.querySelector('.dark-mode');
const body = document.querySelector('body');

darkModeBtn.addEventListener('click', () => {
body.classList.toggle('dark-mode');});
