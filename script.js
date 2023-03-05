	// Hamburger Menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
  
menuToggle.addEventListener( 'click', function () {
nav.classList.toggle( 'slide');});
    
  // dark-mode

const darkModeBtn = document.querySelector('.dark-mode');
const body = document.querySelector('body');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (
    darkModeBtn.innerHTML === '<span class="material-symbols-outlined">dark_mode</span>') {
    darkModeBtn.innerHTML = '<span class="material-symbols-outlined">light_mode</span>';
  } else {
    darkModeBtn.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>';
  }
});