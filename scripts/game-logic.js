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
function game() {
    let computerScore = 0;
    let playerScore = 0;
    let finalWinner = "";
    for (let i=0; i < 5; i++) {
        let input = getInput();
        let roundWinner = playRound(input, chooseComputerSelection());
        switch (roundWinner) {
            case 0:
                computerScore++;
                break;
            case 1:
                playerScore++;
                break;
            default:
                break;
        }
    }
    finalWinner = (playerScore > computerScore) ? "Player" : 
                    ( (playerScore < computerScore) ? "Computer" : "Draw" );
    alert(`Winner: ${finalWinner}! See console log for score details.`)
    console.log("Final scores:");
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
}
function incrementComputerScore() {
    let computerScoreContainer = document.querySelector("#computer-score");
    let score = +computerScoreContainer.textContent;
    score++;
    computerScoreContainer.textContent = score;
}
function incrementPlayerScore() {
    let playerScoreContainer = document.querySelector("#player-score");
    let score = +playerScoreContainer.textContent;
    score++;
    playerScoreContainer.textContent = score;
}
function playRound(e) {
    let playerSelection = e.target.name;
    let computerSelection = chooseComputerSelection();
    let message = `Computer chose ${computerSelection}.\n\n`;
    if (playerSelection == computerSelection) {
        message += "It's a draw!";
    }
    else if ( (playerSelection == "rock" && computerSelection == "paper") ||
                (playerSelection == "paper" && computerSelection == "scissors") ||
                (playerSelection == "scissors" && computerSelection == "rock") ) {
            message += (`${computerSelection} beats ${playerSelection}. You lose!`);
            incrementComputerScore();
    }
    else if ( (playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper") ) {
            message += (`${playerSelection} beats ${computerSelection}. You win!`);
            incrementPlayerScore();
    }
    else {
        message += "Something went wrong!";
    }
    updateMessage(message);
}
function updateMessage(message) {
    let messageContainer = document.querySelector("#message");
    messageContainer.textContent = message;
}
let buttons = document.querySelectorAll("button");
buttons.forEach( (button) => {
    button.addEventListener("click", playRound)
});