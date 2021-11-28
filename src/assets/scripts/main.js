const root = document.documentElement;
document.documentElement.classList.remove("no-js");


// ---------- Theme Toggle ----------

const themeToggle = document.querySelector("#theme-toggle-form");
const currentTheme = root.dataset.theme;

const savedTheme = localStorage.getItem("theme");

if (savedTheme && (savedTheme !== currentTheme)) {
	themeToggle.querySelector(`input[value='${savedTheme}']`).checked = true;
	root.dataset.theme = savedTheme;
}

themeToggle.addEventListener("change", (e) => {
	const selectedInput = e.target.closest("input[type='radio']");

	if (selectedInput) {
		const selectedTheme = selectedInput.value;

		root.dataset.theme = selectedTheme;
		localStorage.setItem("theme", selectedTheme);

		let colorScheme;

		if (selectedTheme !== "system") {
			colorScheme = selectedTheme;
		} else {
			colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark light" : "light dark";
		}

		document.querySelector("meta[name='color-scheme']").content = colorScheme;
		root.style.colorScheme = colorScheme;
	}
});