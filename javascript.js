let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(`You picked ${playerSelection}.`);
    console.log(`The computer picked ${computerSelection}.`);
    if (playerSelection == computerSelection) {
        alert(`It's a tie!`);
    } else if (playerSelection == "paper" && computerSelection == "rock" || 
                playerSelection == "rock" && computerSelection == "scissors" || 
                playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        alert(playerSelection + ` beats ` + computerSelection + ` -- You win!`);
    } else if (playerSelection == "rock" && computerSelection == "paper" || 
                playerSelection == "paper" && computerSelection == "scissors" || 
                playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        alert(computerSelection + ` beats ` + playerSelection + ` -- You lose!`);
    }
}

function getComputerChoice() {
    let x = 0
    x = Math.floor(Math.random() * 3) + 1; // Get random number, round down, multiply by 3, then add 1.  Generates a random integer 1-3.
    if (x == 1) {
        return "rock";
    } else if (x == 2) {
        return "paper";
    } else if (x == 3) {
        return "scissors";
    } else {return "Oops!"} // Player should never see this message.
}

const container = document.querySelector(".container");

let rock = document.createElement("button");
rock.setAttribute("id", "rock");
rock.setAttribute("class", "playerInput");
rock.textContent = "Rock";
container.appendChild(rock);

let paper = document.createElement("button");
paper.setAttribute("id", "paper");
paper.setAttribute("class", "playerInput");
paper.textContent = "Paper";
container.appendChild(paper);

let scissors = document.createElement("button");
scissors.setAttribute("id", "scissors");
scissors.setAttribute("class", "playerInput");
scissors.textContent = "Scissors";
container.appendChild(scissors);

let button = document.getElementsByClassName("playerInput");
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () =>{
        playerSelection = button[i].id;
        alert(playRound(playerSelection, computerSelection));
        
    }
)}