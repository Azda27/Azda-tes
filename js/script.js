// Hamburger Menu
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});
// Dark Mode
const darkModeBtn = document.querySelector(".dark-mode");
const body = document.querySelector("body");
let themePreference = localStorage.getItem("themePreference");
if (!themePreference) {
  themePreference = "auto";
  localStorage.setItem("themePreference", themePreference);
}
if (themePreference === "dark") {
  enableDarkMode();
} else if (themePreference === "light") {
  disableDarkMode();
} else {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    enableDarkMode();
  }
}
darkModeBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
    localStorage.setItem("themePreference", "light");
  } else {
    enableDarkMode();
    localStorage.setItem("themePreference", "dark");
  }
});
function enableDarkMode() {
  body.classList.add("dark-mode");
  darkModeBtn.innerHTML =
    '<span class="material-symbols-outlined">light_mode</span>';
}
function disableDarkMode() {
  body.classList.remove("dark-mode");
  darkModeBtn.innerHTML =
    '<span class="material-symbols-outlined">dark_mode</span>';
}
// Clear Local Storage
const clearLocalStorageBtn = document.querySelector(".clear");
clearLocalStorageBtn.addEventListener("click", () => {
  localStorage.clear();
});
