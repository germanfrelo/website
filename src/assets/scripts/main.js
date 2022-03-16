document.documentElement.classList.remove("no-js")

// ---------- Theme Toggle ----------

const savedTheme = localStorage.getItem("theme")
const currentTheme = document.documentElement.dataset.theme
const themeToggle = document.querySelector("#theme-toggle")

if (savedTheme && (savedTheme !== currentTheme)) {
	themeToggle.querySelector(`input[value='${savedTheme}']`).checked = true
	setRootDataTheme(savedTheme)
	setColorScheme(savedTheme)
	setImagesByTheme(savedTheme)
}

themeToggle.addEventListener("change", (e) => {
	const selectedInput = e.target.closest("input[type='radio']")

	if (selectedInput) {
		const selectedTheme = selectedInput.value

		setRootDataTheme(selectedTheme)
		setColorScheme(selectedTheme)
		setImagesByTheme(selectedTheme)
		updateSavedTheme(selectedTheme)
	}
})

function updateSavedTheme(theme) {
	localStorage.setItem("theme", theme)
}

function setRootDataTheme(theme) {
	document.documentElement.dataset.theme = theme
}

function setColorScheme(theme) {
	let colorScheme = "light dark"

	switch (theme) {
		case "light":
		case "dark":
			colorScheme = theme
			break

		case "system":
			colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark light" : "light dark"
			break

		default:
			break
	}

	// In the meta tag in HTML
	document.querySelector("meta[name='color-scheme']").content = colorScheme
	// In CSS
	document.documentElement.style.setProperty("--color-scheme", colorScheme)
}

function setImagesByTheme(selectedTheme) {
	const imagesAndSources = document.querySelectorAll("[srcset], [src]")

	switch (selectedTheme) {
		case "light":
			imagesAndSources.forEach(element => {
				if (element.matches("img")) element.src = element.src.replace("[dark]", "[light]")
				if (element.matches("source")) element.srcset = element.srcset.replace("[dark]", "[light]")
			})
			break

		case "dark":
			imagesAndSources.forEach(element => {
				if (element.matches("img")) element.src = element.src.replace("[light]", "[dark]")
				if (element.matches("source")) element.srcset = element.srcset.replace("[light]", "[dark]")
			})
			break

		case "system":
			imagesAndSources.forEach(element => {
				if (element.matches("img")) element.src = element.src.replace("[dark]", "[light]")
				if (element.matches("source")) {
					if (element.matches("[media*='light']")) {
						element.srcset = element.srcset.replace("[dark]", "[light]")
					} else if (element.matches("[media*='dark']")) {
						element.srcset = element.srcset.replace("[light]", "[dark]")
					}
				}
			})
			break

		default:
			break
	}
}
