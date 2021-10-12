const pointsSelector = document.querySelector("#points-selector");
const resetGameBtn = document.querySelector("#reset-game-btn");
const result = document.querySelector("#result");

const player1 = {
    number:  1,
    name:    document.querySelector("#player1Name").textContent,
    score:   0,
    display: document.querySelector("#player1Display"),
    button:  document.querySelector("#player1Btn")
}

const player2 = {
    number:  2,
    name:    document.querySelector("#player2Name").textContent,
    score:   0,
    display: document.querySelector("#player2Display"),
    button:  document.querySelector("#player2Btn")
}

const players = [player1, player2];

let isGameOver = false;

for (const player of players) {
    player.button.addEventListener("click", function() {
        if (!isGameOver) {
            player.score += 1;
            player.display.textContent = player.score;
            if (player.score === parseInt(pointsSelector.value)) {
                isGameOver = true;
                players.forEach(player => player.button.disabled = true);
                pointsSelector.disabled = true;
                showTheWinner(player);
            }
        }
    });
}

pointsSelector.addEventListener("change", (e) => {
    resetScores();
});

resetGameBtn.addEventListener("click", resetGame);

function resetScores() {
    for (const player of players) {
        player.score = 0;
        player.display.textContent = "0";
    }
}

function resetGame() {
    isGameOver = false;
    result.textContent = "";
    resetScores();
    players.forEach(player => player.button.disabled = false);
    pointsSelector.disabled = false;
}

function showTheWinner(player) {
    const resultWinner = document.createElement("span");
    resultWinner.classList.add(`player${player.number}`);
    console.log(resultWinner);
    resultWinner.textContent = player.name;
    console.log(resultWinner);
    result.append("¡Ha ganado ", resultWinner, "!");
}