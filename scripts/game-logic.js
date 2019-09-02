function capitalize(text) {
    let firstLetter = text.slice(0, 1);
    let remainder = text.slice(1);
    return (firstLetter.toUpperCase() + remainder);
}
function chooseComputerSelection() {
    let choiceNum = Math.floor( Math.random()*3 );
    switch (choiceNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return ("Error! Generated number = " + choiceNum);
    }
}
function determineWinner(playerSelection, computerSelection) {
    let winner = "";
    if (playerSelection == computerSelection) {
        message += "It's a draw!";
        winner = 'd';
    }
    else if ( (playerSelection == "rock" && computerSelection == "paper") ||
                (playerSelection == "paper" && computerSelection == "scissors") ||
                (playerSelection == "scissors" && computerSelection == "rock") ) {
            winner = 'c';
    }
    else if ( (playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper") ) {
            winner = 'p';
    }
    return winner;
}
function getComputerScore() {
    let computerScoreContainer = document.querySelector("#computer-score");
    return +computerScoreContainer.textContent;
}

function getPlayerScore() {
    let playerScoreContainer = document.querySelector("#player-score");
    return +playerScoreContainer.textContent;
}
function playRound(e) {
    let playerSelection = e.target.name;
    let computerSelection = chooseComputerSelection(); 
    let message = `Computer chose ${computerSelection}. `;
    let winner = determineWinner(playerSelection, computerSelection);
    switch (winner) {
        case 'p':
            message += `${capitalize(playerSelection)} beats ${computerSelection}. You win!`;
            setPlayerScore(getPlayerScore() + 1);
            break;
        case 'c':
            message += `${capitalize(computerSelection)} beats ${playerSelection}. You lose!`;
            setComputerScore(getComputerScore() + 1);
            break;
        case 'd':
            message += "It's a draw!";
            break;
        default:
            message += "Something went wrong!";
            console.log(`Player selection: ${playerSelection}`);
            console.log(`Computer selection: ${computerSelection}`);
    }
    updateMessage(message);
    if (getComputerScore() >= 5) {
        alert("Computer wins!")
        setComputerScore(0);
        setPlayerScore(0);
    }
    else if (getPlayerScore() >= 5) {
        alert("You win!")
        setComputerScore(0);
        setPlayerScore(0);
    }
}
function setComputerScore(score) {
    let computerScoreContainer = document.querySelector("#computer-score");
    computerScoreContainer.textContent = score;
}
function setPlayerScore(score) {
    let playerScoreContainer = document.querySelector("#player-score");
    playerScoreContainer.textContent = score;
}
function updateMessage(message) {
    let messageContainer = document.querySelector("#message");
    messageContainer.textContent = message;
}
let buttons = document.querySelectorAll("button");
buttons.forEach( (button) => {
    button.addEventListener("click", playRound)
});