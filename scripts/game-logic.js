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
    let winner = determineWinner(playerSelection, computerSelection);
    switch (winner) {
        case 'p':
            message += `${playerSelection} beats ${computerSelection}. You win!`;
            incrementPlayerScore();
            break;
        case 'c':
            message += `${computerSelection} beats ${playerSelection}. You lose!`;
            incrementComputerScore();
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
}
function updateMessage(message) {
    let messageContainer = document.querySelector("#message");
    messageContainer.textContent = message;
}
let buttons = document.querySelectorAll("button");
buttons.forEach( (button) => {
    button.addEventListener("click", playRound)
});