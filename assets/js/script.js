const m = document.querySelector(".menu-toggle input"),
  n = document.querySelector("nav ul");
m.addEventListener("click", () => {
  n.classList.toggle("slide");
});
const d = document.getElementById("dark-mode-switch"),
  b = document.querySelector("body");
let t = localStorage.getItem("themePreference");
if (!t) {
  (t = "auto"), localStorage.setItem("themePreference", t);
}
"dark" === t
  ? (enableDarkMode(), (d.checked = !0))
  : "light" === t
  ? (disableDarkMode(), (d.checked = !1))
  : (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      (enableDarkMode(), (d.checked = !0)),
    d.addEventListener("change", function () {
      this.checked
        ? (enableDarkMode(), localStorage.setItem("themePreference", "dark"))
        : (disableDarkMode(), localStorage.setItem("themePreference", "light"));
    })),
  (clearLocalStorageBtn = document.getElementById("clear")),
  clearLocalStorageBtn.addEventListener("click", () => {
    localStorage.clear();
  });
function enableDarkMode() {
  b.classList.add("dark-mode");
}
function disableDarkMode() {
  b.classList.remove("dark-mode");
}
