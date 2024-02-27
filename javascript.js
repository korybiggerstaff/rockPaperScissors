let playerSelection = "";
let computerSelection = "";
let score = 0

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log("You picked " + playerSelection);
    console.log("The computer picked " + computerSelection);
    if (playerSelection == computerSelection) {
                return "It's a tie!";
    } else if (playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper") {
        score++;
        return "You win!";
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose!";
    } else {return "Uhhh..."}
}

function getComputerChoice() {
    let x = 0
    x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
        return "rock";
    } else if (x == 2) {
        return "paper";
    } else if (x == 3) {
        return "scissors";
    } else {return "Oops!"}
}
function playGame() {
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));
 }

playGame(playerSelection, computerSelection);
console.log("Final score: " + score);