//play buttons
const images = document.querySelectorAll('img');
const rounds = document.querySelector('#rounds');
const score = document.querySelector('#score');

//match button
const matchBtn = document.querySelector('#userButtonTwo');
matchBtn.textContent = 'Reset score';
matchBtn.addEventListener('click', () => {
    score.innerHTML = '';
    score.appendChild(numberZero);
});

//Event listener for each image
images.forEach(img => {
    img.addEventListener('click', () => {
        document.querySelector('#roundText').innerHTML = '';
        playRound(img);
        roundNumber += 1;
        displayRoundNumber();
        scoreTracker(playerScore, computerScore);
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
        case 6:
            rounds.innerHTML = '';
            rounds.appendChild(numberZero.cloneNode());
            document.querySelector('#roundText').innerHTML = '';
            roundNumber = 0;
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
        document.querySelector('#roundText').appendChild(roundWon);
        playerScore += 1;
        computerScore -= 1;
    }  else if(humanChoice === "paper" && computerChoice === "rock") {
        document.querySelector('#roundText').appendChild(roundWon);
        playerScore += 1;
        computerScore -= 1;
    }  else if(humanChoice === "scissors" && computerChoice === "paper") {
        document.querySelector('#roundText').appendChild(roundWon);
        playerScore += 1;
        computerScore -= 1;
    }  else if(humanChoice === computerChoice) {
        return document.querySelector('#roundText').appendChild(roundTie);
    }  else {
        document.querySelector('#roundText').appendChild(roundLost);
        computerScore += 1;
        playerScore -= 1;
    };
};

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
score.appendChild(numberZero);
rounds.appendChild(numberZero.cloneNode());

//img elements
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

const numberMinusOne = document.createElement('img');
numberMinusOne.src = '/img/numberOne.png';

const numberMinusTwo = document.createElement('img');
numberMinusTwo.src = '/img/numberTwo.png';

const roundLost = document.createElement('h1');
roundLost.textContent = 'ROUND LOST';

const roundWon = document.createElement('h1');
roundWon.textContent = 'ROUND WON';

const roundTie = document.createElement('h1');
roundTie.textContent = `IT'S A TIE`;
//img elements


//player score and round number trackers
let playerScore = 0;
let roundNumber = 0;
let computerScore = 0;

//add score based on rounds
function scoreTracker(playerWins, computerWins) {
    if (playerWins == 5) {
        score.innerHTML = '';
        score.appendChild(numberOne.cloneNode());
    }   else if (playerWins == 10) {
        score.innerHTML = '';
        score.appendChild(numberTwo.cloneNode());
    }   else if (computerWins == 5) {
        score.innerHTML = '';
        score.appendChild(numberMinusOne);
    }   else if (computerWins == 10) {
        score.innerHTML = '';
        score.appendChild(numberMinusTwo);
    }
};