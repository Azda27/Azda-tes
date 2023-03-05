// Hamburger Menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => nav.classList.toggle('slide'));
    
// Dark Mode
const darkModeBtn = document.querySelector('.dark-mode');
const body = document.querySelector('body');
const darkMode = localStorage.getItem('darkMode');

if (darkMode === 'enabled') toggleDarkMode();

darkModeBtn.addEventListener('click', () => {
  toggleDarkMode();
  localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : '');
});

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  darkModeBtn.innerHTML = body.classList.contains('dark-mode')
    ? '<span class="material-symbols-outlined">light_mode</span>'
    : '<span class="material-symbols-outlined">dark_mode</span>';
}