//generate random number function / DONE
//assign choice based on number / DONE
//if rock VS / DONE
//if paper VS / DONE
//if scissors VS / DONE
//real user input / DONE
//round outcome output / DONE
//another round button / DONE
//score tracker / DONE

function getComputerChoice() {
    return Math.random()
};

//const randomNumber = getComputerChoice();

let playerScore = 0;
let numberRounds = 0;
let userTextChoice = document.getElementById("userInputChoice");
let userTextButton = document.getElementById("userButton");

userTextButton.addEventListener("click" , function() {
    const finalUserChoice = userTextChoice.value;
    const randomNumber = getComputerChoice();
    const computerWeapon = evaluateNumber(randomNumber);
    document.getElementById("computerOutput").textContent = computerWeapon;
    const roundDeclaration = evaluateWinner(finalUserChoice, computerWeapon);
    roundOutput(roundDeclaration);
    document.getElementById("yourScore").textContent = playerScore;
    totalRounds();
    document.getElementById("totalRounds").textContent = numberRounds;
});

function totalRounds(randomWord) {
    numberRounds++;
}

function evaluateNumber(computerNumber) {
    if(computerNumber <= 0.33) {
        return "rock"
    }   else if(computerNumber <= 0.66) {
        return "scissors"
    }   else if(computerNumber <= 0.99) {
        return "paper"
    }   else {console.log("The machine broke")}
};

function roundOutput(roundDeclaration) {
    alert(roundDeclaration);
    if(roundDeclaration == "YOU WIN!") {
        playerScore++;
    }   else if(roundDeclaration == "YOU LOST!") {
        playerScore--;
    }
};


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

