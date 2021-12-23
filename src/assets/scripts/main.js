document.documentElement.classList.remove("no-js");


// ---------- Theme Toggle ----------

const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const imagesAndSources = document.querySelectorAll("[srcset], [src]");
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

		let colorScheme = "light dark";

		switch (selectedTheme) {
			case "light":
				colorScheme = selectedTheme;
				imagesAndSources.forEach(element => {
					if (element.matches("img")) element.src = element.src.replace("[dark]", "[light]");
					if (element.matches("source")) element.srcset = element.srcset.replace("[dark]", "[light]");
				});
				break;
			case "dark":
				colorScheme = selectedTheme;
				imagesAndSources.forEach(element => {
					if (element.matches("img")) element.src = element.src.replace("[light]", "[dark]");
					if (element.matches("source")) element.srcset = element.srcset.replace("[light]", "[dark]");
				});
				break;
			case "system":
				colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark light" : "light dark";
				imagesAndSources.forEach(element => {
					if (element.matches("img")) element.src = element.src.replace("[dark]", "[light]");
					if (element.matches("source")) {
						if (element.matches("[media*='light']")) {
							element.srcset = element.srcset.replace("[dark]", "[light]");
						} else if (element.matches("[media*='dark']")) {
							element.srcset = element.srcset.replace("[light]", "[dark]");
						}
					}
				});
				break;
			default:
				colorScheme = "light dark";
				break;
		}

		document.querySelector("meta[name='color-scheme']").content = colorScheme;
		root.style.colorScheme = colorScheme;
	}
});