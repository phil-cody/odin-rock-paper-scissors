function getComputerChoice() {
    let optionsArr = ['rock', 'paper', 'scissors'];
    let indexOptions = Math.floor(Math.random() * 3);

    return optionsArr[indexOptions];
}

function getHumanChoice() {
    let choice = prompt('enter your choice: ', 'rock');

    return choice;
}