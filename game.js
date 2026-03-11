//play buttons
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('click', () => {
        playRound(img);
    });
});

//computer random number choice
function getComputerChoice() {
    return Math.random()
};

//computer hand choice based on number
function evaluateNumber(computerNumber) {
    if(computerNumber <= 0.33) {
        return "rock"
    }   else if(computerNumber <= 0.66) {
        return "scissors"
    }   else if(computerNumber <= 0.99) {
        return "paper"
    }   else {console.log("The machine broke")}
};

//evaluate who is the winner
function evaluateWinner(humanChoice, computerChoice) {
    if(humanChoice === "rock" && computerChoice === "scissors") {
        return "YOU WIN!"
    }  else if(humanChoice === "paper" && computerChoice === "rock") {
        return "YOU WIN!"
    }  else if(humanChoice === "scissors" && computerChoice === "paper") {
        return "YOU WIN!"
    }  else if(humanChoice === computerChoice) {
        return "IT'S A TIE!"
    }  else {return "YOU LOST!"}
};

//plays a round, evaluates winner
function playRound(humanChoice) {
    const computerNumber = getComputerChoice();
    const computerChoice = evaluateNumber(computerNumber);
    humanChoice = humanChoice.dataset.choice;
    const victory = evaluateWinner(humanChoice, computerChoice);
    console.log(victory);
}
