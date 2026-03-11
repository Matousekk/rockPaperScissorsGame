//play buttons
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('click', () => {
        document.querySelector('#roundText').innerHTML = '';
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
        document.querySelector('#roundText').appendChild(roundWon)
    }  else if(humanChoice === "paper" && computerChoice === "rock") {
        document.querySelector('#roundText').appendChild(roundWon)
    }  else if(humanChoice === "scissors" && computerChoice === "paper") {
        document.querySelector('#roundText').appendChild(roundWon)
    }  else if(humanChoice === computerChoice) {
        return document.querySelector('#roundText').appendChild(roundTie)
    }  else {document.querySelector('#roundText').appendChild(roundLost)}
};

//plays a round, evaluates winner
function playRound(humanChoice) {
    const computerNumber = getComputerChoice();
    const computerChoice = evaluateNumber(computerNumber);
    humanChoice = humanChoice.dataset.choice;
    const victory = evaluateWinner(humanChoice, computerChoice);
    console.log(victory);
}


//assign score and rounds number placeholders
//const scoreImg = document.querySelector('score');
//const roundImg = document.querySelector('rounds');

//elements for score and number images
const numberZero = document.createElement('img');
numberZero.src = '/img/zero.png';
//displaying score 0 by default
document.querySelector('#score').appendChild(numberZero);
document.querySelector('#rounds').appendChild(numberZero.cloneNode());

const numberOne = document.createElement('img');
numberOne.src = '/img/number-1.png';

const numberTwo = document.createElement('img');
numberTwo.src = '/img/number-2.png';

const numberThree = document.createElement('img');
numberThree.src = '/img/number-3.png';

const numberFour = document.createElement('img');
numberFour.src = '/img/number-4.png';

const numberFive = document.createElement('img');
numberFive.src = '/img/number-5.png';

const roundLost = document.createElement('h1');
roundLost.textContent = 'ROUND LOST';

const roundWon = document.createElement('h1');
roundWon.textContent = 'ROUND WON';

const roundTie = document.createElement('h1');
roundTie.textContent = `IT'S A TIE`;