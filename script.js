function getComputerChoice() {
    let optionsArr = ['rock', 'paper', 'scissors'];
    let indexOptions = Math.floor(Math.random() * 3);

    return optionsArr[indexOptions];
}

