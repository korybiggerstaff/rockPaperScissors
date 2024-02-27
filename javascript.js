let playerSelection = "";
let computerSelection = "";
let score = 0

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase() //convert player input to lowercase
    console.log("You picked " + player);
    console.log("The computer picked " + computerSelection);
    if (player = "rock") {
        switch (computerSelection) {
            case "rock":
                return "It's a tie!";
                break;
            case "scissors":
                return "You win! Rock beats scissors.";
                break;
            case "paper":
                return "You lose! Paper beats rock.";
                break;
        }
    }
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
const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));