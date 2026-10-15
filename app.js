const choices = ["rock", "paper", "scissor"];
const SCORE_LIMIT = 5;
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
const resultElement = document.getElementById("winrate-heading");

let userScore = 0;
let computerScore = 0;
let gameOver = false;

function checkWinner() {
	if (userScore >= SCORE_LIMIT) {
		resultElement.textContent = `You win the game! Congratulations!`;
		gameOver = true;
	} else if (computerScore >= SCORE_LIMIT) {
		resultElement.textContent = `Fuck! You Lose! Computer Wins The Game!`;
		gameOver = true;
	}
}

function playRound(userChoice) {
	if (gameOver) return;

	const computerChoice = choices[Math.floor(Math.random() * 3)];

	if (userChoice === computerChoice) {
		resultElement.textContent = `Tie! You both chose ${userChoice}.`;
		return;
	}

	const userWins =
		(userChoice === "rock" && computerChoice === "scissor") ||
		(userChoice === "paper" && computerChoice === "rock") ||
		(userChoice === "scissor" && computerChoice === "paper");

	if (userWins) {
		userScore += 1;
		userScoreElement.textContent = `User: ${userScore}`;
		resultElement.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
	} else {
		computerScore += 1;
		computerScoreElement.textContent = `Computer: ${computerScore}`;
		resultElement.textContent = `Computer wins! ${computerChoice} beats ${userChoice}.`;
	}

	checkWinner();
}

document.querySelectorAll(".choice").forEach((choiceElement) => {
	choiceElement.addEventListener("click", () => {
		playRound(choiceElement.id);
	});
});
