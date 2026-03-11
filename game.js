//play buttons
const images = document.querySelectorAll('img');
const rounds = document.querySelector('#rounds');

images.forEach(img => {
    img.addEventListener('click', () => {
        document.querySelector('#roundText').innerHTML = '';
        playRound(img);
        roundNumber += 1;
        displayRoundNumber();
    });
});

//display round number img based on round
function displayRoundNumber() {
    switch (roundNumber) {
        case 1:
            rounds.innerHTML = '';
            rounds.appendChild(numberOne);
            break;
        case 2:
            rounds.innerHTML = '';
            rounds.appendChild(numberTwo);
            break;
        case 3:
            rounds.innerHTML = '';
            rounds.appendChild(numberThree);
            break;
        case 4:
            rounds.innerHTML = '';
            rounds.appendChild(numberFour);
            break;
        case 5:
            rounds.innerHTML = '';
            rounds.appendChild(numberFive);
            break;
        default:
            rounds.innerHTML = '';
            rounds.appendChild(numberZero.cloneNode());
    }
}

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
}

//elements for score and number images
const numberZero = document.createElement('img');
numberZero.src = '/img/zero.png';
//displaying score 0 by default
document.querySelector('#score').appendChild(numberZero);
rounds.appendChild(numberZero.cloneNode());

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

//player score and round number trackers
let playerScore = 0;
let roundNumber = 0;