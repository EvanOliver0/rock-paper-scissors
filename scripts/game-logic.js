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
function getInput() {
    let inputValid = false;
    let promptMessage = "Rock, paper, or scissors?"
    while (!inputValid) {
        input = prompt( promptMessage ).toLowerCase();
        if (input == "rock" || input == "paper" || input == "scissors") {
            inputValid = true;
        }
        else {
            promptMessage = "That input was not valid.\n\nRock, paper, or scissors?";
        }
    }
    return input;
}
function playRound(e) {
    let playerSelection = e.target.name;
    let computerSelection = chooseComputerSelection();
    let msg = `Computer chose ${computerSelection}.\n\n`;
    let winner = -1;
    // winner: 0 represents player loss; 1 represents player victory; 2 represents a draw; 
    // anything else represents an error.
    if (playerSelection == computerSelection) {
        msg += "It's a draw!";
        winner = 2;
    }
    else if ( (playerSelection == "rock" && computerSelection == "paper") ||
                (playerSelection == "paper" && computerSelection == "scissors") ||
                (playerSelection == "scissors" && computerSelection == "rock") ) {
            msg += (`${computerSelection} beats ${playerSelection}. You lose!`);
            winner = 0;
    }
    else if ( (playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper") ) {
            msg += (`${playerSelection} beats ${computerSelection}. You win!`);
            winner = 1;
    }
    else {
        msg += "Something went wrong!";
    }
    alert(msg);
}
let buttons = document.querySelectorAll("button");
buttons.forEach( (button) => {
    button.addEventListener("click", playRound)
});