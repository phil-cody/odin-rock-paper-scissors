let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let optionsArr = ['Rock', 'Paper', 'Scissors'];
    let indexOptions = Math.floor(Math.random() * 3);

    return optionsArr[indexOptions];
}

function getHumanChoice() {
    let choice = prompt('enter your choice: ', 'Rock');

    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
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

    if (humanChoice === computerChoice) return resultArr[0];

    if (humanRock && computerPaper) {
        computerScore++;
        return `${resultArr[1]} ${optionsArr[1]} beats ${optionsArr[0]}`;
    } else if (humanRock && computerScissors) {
        humanScore++;
        return `${resultArr[2]} ${optionsArr[0]} beats ${optionsArr[2]}`;
    } else if (humanPaper && computerRock) {
        humanScore++;
        return `${resultArr[2]} ${optionsArr[1]} beats ${optionsArr[0]}`;
    } else if (humanPaper && computerScissors) {
        computerScore++;
        return `${resultArr[1]} ${optionsArr[2]} beats ${optionsArr[1]}`;
    } else if (humanScissors && computerRock) {
        computerScore++;
        return `${resultArr[1]} ${optionsArr[0]} beats ${optionsArr[2]}`
    } else if (humanScissors && computerPaper) {
        humanScore++;
        return `${resultArr[2]} ${optionsArr[2]} beats ${optionsArr[1]}`;
    }
}

function playGame() {
    let count = +prompt('Enter number of rounds: ', 5);

    for (let i = 1; i <= count; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Round ${i}
human selection = ${humanSelection}
computer selection = ${computerSelection}
${playRound(humanSelection, computerSelection)}
------ Score -------
You - ${humanScore}
Computer - ${computerScore}`);
    }

    if (humanScore === computerScore) {
        console.log(`The score is equal!
Extra Round time!`);

        while (humanScore === computerScore) {
            const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`!Extra Round!
human selection = ${humanSelection}
computer selection = ${computerSelection}
${playRound(humanSelection, computerSelection)}
------ Score -------
You - ${humanScore}
Computer - ${computerScore}`)
        }
    }
    
    if (humanScore > computerScore) {
        console.log(`You won! Congratulations!`);
    } else {
        console.log(`Oh, maybe you'll be lucky next time :)`);
    }
}

playGame();