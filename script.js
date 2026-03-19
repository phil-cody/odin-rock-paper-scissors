let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

let choiceArr = document.querySelector(".choice");
let resultMessage = document.querySelector(".result");
let roundNumberContent = document.querySelector(".result__round-number");
let resultScore = document.querySelector(".result__score");
let startOver = document.querySelector("#restart__button");
console.log(startOver);

const resultChoice = document.createElement("p");
const resultRound = document.createElement("p");

const wonMessage = document.createElement("p");
const loseMessage = document.createElement("p");

wonMessage.textContent = "You won! Congratulations!";
loseMessage.textContent = "Oh, maybe you`ll be lucky next time :)";

function getComputerChoice() {
  let optionsArr = ["Rock", "Paper", "Scissors"];
  let indexOptions = Math.floor(Math.random() * 3);

  return optionsArr[indexOptions];
}

function playRound(humanChoice, computerChoice) {
  let optionsArr = ["Rock", "Paper", "Scissors"];
  let resultArr = ["Draw! You think the same", "You lose!", "You won!"];

  const humanRock = humanChoice === optionsArr[0];
  const humanPaper = humanChoice === optionsArr[1];
  const humanScissors = humanChoice === optionsArr[2];

  const computerRock = computerChoice === optionsArr[0];
  const computerPaper = computerChoice === optionsArr[1];
  const computerScissors = computerChoice === optionsArr[2];

  if (humanChoice === computerChoice) {
    roundNumberContent.textContent = `Round ${roundNumber}`;
    resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
    resultRound.textContent = `${resultArr[0]}`;
    resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
  } else if (humanRock && computerPaper) {
    computerScore++;
    roundNumberContent.textContent = `Round ${roundNumber}`;
    resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
    resultRound.textContent = `${resultArr[1]}`;
    resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
  } else if (humanRock && computerScissors) {
    humanScore++;
    roundNumberContent.textContent = `Round ${roundNumber}`;
    resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
    resultRound.textContent = `${resultArr[2]}`;
    resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
  } else if (humanPaper && computerRock) {
    humanScore++;
    roundNumberContent.textContent = `Round ${roundNumber}`;
    resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
    resultRound.textContent = `${resultArr[2]}`;
    resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
  } else if (humanPaper && computerScissors) {
    computerScore++;
    roundNumberContent.textContent = `Round ${roundNumber}`;
    resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
    resultRound.textContent = `${resultArr[1]}`;
    resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
  } else if (humanScissors && computerRock) {
    computerScore++;
    roundNumberContent.textContent = `Round ${roundNumber}`;
    resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
    resultRound.textContent = `${resultArr[1]}`;
    resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
  } else if (humanScissors && computerPaper) {
    humanScore++;
    roundNumberContent.textContent = `Round ${roundNumber}`;
    resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
    resultRound.textContent = `${resultArr[2]}`;
    resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
  }

  roundNumber++;
}

choiceArr.addEventListener("click", function playGame(event) {
  let target = event.target;

  let playerChoice = target.id.charAt(0).toUpperCase() + target.id.slice(1);

  playRound(playerChoice, getComputerChoice());

  resultMessage.appendChild(resultChoice);
  resultMessage.appendChild(resultRound);
  resultMessage.appendChild(resultScore);

  if (humanScore >= 5) {
    choiceArr.removeEventListener("click", playGame);
    resultMessage.appendChild(wonMessage);
  } else if (computerScore >= 5) {
    choiceArr.removeEventListener("click", playGame);
    resultMessage.appendChild(loseMessage);
  }
});

startOver.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    roundNumber = 1;
    roundNumberContent.textContent = `Are you sure you're ready to repeat it?`;
    resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
    resultChoice.remove();
    resultRound.remove();
});
