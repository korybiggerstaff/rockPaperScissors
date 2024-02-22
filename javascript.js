function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase() //convert player input to lowercase
    let computer = computerSelection.toLowerCase() //convert computer choice to lowercase
    console.log("You picked " + player);
    if (player = "rock") {
        if (computer = "rock") {
            return "It's a tie!";
        } else if (computer = "scissors") {
            return "You win! Rock beats scissors.";
        } else if (computer = "paper") {
            return "You lose! Paper beats rock.";
        }
    } else if (player = "paper") {
        if (computer = "rock") {
            return "You win! Paper beats rock.";
        } else if (computer = "scissors") {
            return "You lose! Scissors beats paper";
        } else if (computer = "paper") {
            return "It's a tie!";
        }
    } else if (player = "scissors") {
        if (computer = "rock") {
            return "You lose! Rock beats scissors";
        } else if (computer = "scissors") {
            return "It's a tie!";
        } else if (computer = "paper") {
            return "You win! Scissors beats paper.";
        }
    }
}

function getComputerChoice() {
    let x = 0
    x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
        return "Rock";
    } else if (x == 2) {
        return "Paper";
    } else if (x == 3) {
        return "Scissors";
    } else {return "Oops!"}
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));