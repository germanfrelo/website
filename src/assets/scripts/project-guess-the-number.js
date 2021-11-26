const guessesContainer = document.querySelector("#guessesContainer");
const form = document.querySelector("#guessForm");
const input = document.querySelector("#guessInput");
const submit = document.querySelector("#guessSubmit");
const guessesList = document.querySelector("#guessesList");
const guesses = guessesList.children;
const msgResult = document.querySelector("#msgResult");
const msgCorrectNumber = document.querySelector("#msgCorrectNumber");

const minGuess = 1;
const maxGuess = 100;

// Generate a random number between min and max
let randomNumber = getRandomIntInclusive(minGuess, maxGuess);

const maxTurnNumber = 10;
let turnNumber = 0;

// Create a reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Empezar de nuevo";
resetButton.addEventListener("click", resetGame);
const resetButtonContainer = document.createElement("div");
resetButtonContainer.append(resetButton);

// Generate a box for every guess/turn and add it to the DOM
for (let i = 1; i <= maxTurnNumber; i++) {
	const li = document.createElement("li");
	li.classList.add("guess-number");
	guessesList.append(li);
}

form.addEventListener("submit", function(e) {
	e.preventDefault();
	const guessNumber = parseInt(input.value);
	input.value = "";
	turnNumber++;

	const currentGuessItem = guesses[turnNumber - 1];
	currentGuessItem.textContent = guessNumber;

	checkGuessNumber(guessNumber, currentGuessItem);
});

// Get a random integer between two values (both inclusive)
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
	return randomInt;
}

function checkGuessNumber(guessNumber, currentGuessItem) {
	if (guessNumber === randomNumber) {
		// Correct
		currentGuessItem.classList.add("guess-number--correct");
		msgResult.textContent = "¡Correcto!";
		msgResult.classList.remove("msg--wrong");
		msgResult.classList.add("msg--correct");
		setGameOver();
	} else {
		// Wrong
		currentGuessItem.classList.add("guess-number--wrong");
		msgResult.classList.remove("msg--correct");
		msgResult.classList.add("msg--wrong");

		if (guessNumber < randomNumber) {
			// Low
			msgResult.textContent = "¡Muy bajo!";
		} else {
			// High
			msgResult.textContent = "¡Muy alto!";
		}

		if (turnNumber === maxTurnNumber) {
			msgCorrectNumber.textContent += `El número era ${randomNumber}.`;
			setGameOver();
		}
	}
}

function setGameOver() {
	// Disable the form input and submit button
	input.disabled = true;
	submit.disabled = true;

	// Add the reset button to the DOM
	guessesContainer.append(resetButtonContainer);
}

function resetGame() {
	// Reset the UI
	for (let guess of guesses) {
		guess.textContent = "";
		guess.classList.remove("guess-number--correct", "guess-number--wrong");
	}
	msgResult.textContent = "";
	msgResult.classList.remove("msg--correct", "msg--wrong");
	msgCorrectNumber.textContent = "";
	input.disabled = false;
	submit.disabled = false;
	resetButtonContainer.remove();
	input.focus();

	// Reset the game logic
	turnNumber = 0;
	randomNumber = getRandomIntInclusive(minGuess, maxGuess);
}