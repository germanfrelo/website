document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("with-js");


// ---------- Page theme toggle ----------

const themeToggleForm = document.querySelector("#theme-toggle-form");
const currentTheme = document.documentElement.dataset.theme;
const savedTheme = localStorage.getItem("theme");

if (savedTheme && (savedTheme !== currentTheme)) {
    themeToggleForm.querySelector(`input[value='${savedTheme}']`).checked = true;
    document.documentElement.dataset.theme = savedTheme;
}

themeToggleForm.addEventListener("change", (e) => {
    const selectedInput = e.target.closest("input[type='radio']");
    if (selectedInput) {
        document.documentElement.dataset.theme = selectedInput.value;
        localStorage.setItem("theme", selectedInput.value);
    }
});


// ---------- Nav/Menu toggle ----------
const navToggle = document.querySelector(".nav-toggle");
navToggle && navToggle.addEventListener("click", function() {
    let t = "true" === navToggle.getAttribute("aria-expanded");
    navToggle.setAttribute("aria-expanded", !t)
});
