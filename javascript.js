function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase() //convert player input to lowercase
    console.log("You picked " + player);
    console.log("The computer picked " + computerSelection);
    if (player = "rock") {
        if (computerSelection = "rock") {
            return "It's a tie!";
        } else if (computerSelection = "scissors") {
            return "You win! Rock beats scissors.";
        } else if (computerSelection = "paper") {
            return "You lose! Paper beats rock.";
        }
    } else if (player = "paper") {
        if (computerSelection = "rock") {
            return "You win! Paper beats rock.";
        } else if (computerSelection = "scissors") {
            return "You lose! Scissors beats paper";
        } else if (computerSelection = "paper") {
            return "It's a tie!";
        }
    } else if (player = "scissors") {
        if (computerSelection = "rock") {
            return "You lose! Rock beats scissors";
        } else if (computerSelection = "scissors") {
            return "It's a tie!";
        } else if (computerSelection = "paper") {
            return "You win! Scissors beats paper.";
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