let humanScore = 0;
let computerScore = 0;

let choiceArr = document.querySelector('.choice');
let resultMessage = document.querySelector('.result');

const resultChoice = document.createElement('p');
const resultRound = document.createElement('p');
const resultScore = document.createElement('p');

const wonMessage = document.createElement('p');
const loseMessage = document.createElement('p');

wonMessage.textContent = 'You won! Congratulations!';
loseMessage.textContent = 'Oh, maybe you`ll be lucky next time :)';

function getComputerChoice() {
    let optionsArr = ['Rock', 'Paper', 'Scissors'];
    let indexOptions = Math.floor(Math.random() * 3);

    return optionsArr[indexOptions];
}

function playRound(humanChoice, computerChoice) {
    let optionsArr = ['Rock', 'Paper', 'Scissors'];
    let resultArr = ['Draw! You think the same', 'You lose!', 'You won!'];

    const humanRock = humanChoice === optionsArr[0];
    const humanPaper = humanChoice === optionsArr[1];
    const humanScissors = humanChoice === optionsArr[2];

    const computerRock = computerChoice === optionsArr[0];
    const computerPaper = computerChoice === optionsArr[1];
    const computerScissors = computerChoice === optionsArr[2];

    if (humanChoice === computerChoice) {
        resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
        resultRound.textContent = `${resultArr[0]}`;
        resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
    } else if (humanRock && computerPaper) {
        computerScore++;
        resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
        resultRound.textContent = `${resultArr[1]}`;
        resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
    } else if (humanRock && computerScissors) {
        humanScore++;
        resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
        resultRound.textContent = `${resultArr[2]}`;
        resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
    } else if (humanPaper && computerRock) {
        humanScore++;
        resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
        resultRound.textContent = `${resultArr[2]}`;
        resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
    } else if (humanPaper && computerScissors) {
        computerScore++;
        resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
        resultRound.textContent = `${resultArr[1]}`;
        resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
    } else if (humanScissors && computerRock) {
        computerScore++;
        resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
        resultRound.textContent = `${resultArr[1]}`;
        resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
    } else if (humanScissors && computerPaper) {
        humanScore++;
        resultChoice.textContent = `You : ${humanChoice} | ${computerChoice} : Computer`;
        resultRound.textContent = `${resultArr[2]}`;
        resultScore.textContent = `Player : ${humanScore} | ${computerScore} : Computer`;
    }
}

choiceArr.addEventListener('click', function playGame(event) {
    let target = event.target;
    
    let playerChoice = target.textContent;

    playRound(playerChoice, getComputerChoice());

    resultMessage.appendChild(resultChoice);
    resultMessage.appendChild(resultRound);
    resultMessage.appendChild(resultScore);

    if (humanScore >= 5) {
        choiceArr.removeEventListener('click', playGame);
        resultChoice.remove();
        resultRound.remove();
        resultMessage.appendChild(wonMessage);
    } else if (computerScore >= 5) {
        choiceArr.removeEventListener('click', playGame);
        resultChoice.remove();
        resultRound.remove();
        resultMessage.appendChild(loseMessage);
    }
})