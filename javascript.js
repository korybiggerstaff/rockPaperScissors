let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
const win = new Audio('win.mp3');
const lose = new Audio('lose.mp3');

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(`You picked ${playerSelection}.`);
    console.log(`The computer picked ${computerSelection}.`);
    if (playerSelection == computerSelection) {
        announce.textContent = `It's a tie!`;
        container.style.backgroundColor = "white";
    } else if (playerSelection == "paper" && computerSelection == "rock" || 
                playerSelection == "rock" && computerSelection == "scissors" || 
                playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        container.style.backgroundColor = "lightBlue";
        win.play();
        announce.textContent = `Your ` + playerSelection + ` beats the computer's ` + computerSelection + ` -- You win!`;
    } else if (playerSelection == "rock" && computerSelection == "paper" || 
                playerSelection == "paper" && computerSelection == "scissors" || 
                playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        container.style.backgroundColor = "pink"
        lose.play();
        announce.textContent = `The computer's ` + computerSelection + ` beats your ` + playerSelection + ` -- You lose!`;
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
const buttonContainer = document.querySelector(".buttonContainer");
const scoreContainer = document.querySelector(".scoreContainer");
const announceBox = document.querySelector(".announceBox");
const rock = document.createElement("button");
rock.setAttribute("id", "rock");
rock.setAttribute("class", "playerInput");
rock.textContent = "Rock";
container.appendChild(rock);

const paper = document.createElement("button");
paper.setAttribute("id", "paper");
paper.setAttribute("class", "playerInput");
paper.textContent = "Paper";
container.appendChild(paper);

const scissors = document.createElement("button");
scissors.setAttribute("id", "scissors");
scissors.setAttribute("class", "playerInput");
scissors.textContent = "Scissors";
container.appendChild(scissors);

const playerScoreDisp = document.createElement("p");
playerScoreDisp.textContent = `Player score: ` + playerScore;
playerScoreContainer.append(playerScoreDisp);

const compScoreDisp = document.createElement("p");
compScoreDisp.textContent = `Computer score: ` + computerScore;
compScoreContainer.append(compScoreDisp);

let button = document.getElementsByClassName("playerInput");
for (let i = 0; i < button.length; i++) { // Put a click event listener on each button, which plays a round using player input
    button[i].addEventListener("click", () =>{
        playerSelection = button[i].id;
        playRound(playerSelection, computerSelection);
        playerScoreDisp.textContent = `Player score: ` + playerScore;
        compScoreDisp.textContent = `Computer score: ` + computerScore;
        if (playerScore == 5) {
            alert("Game over -- YOU WIN!");
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        } else if (computerScore == 5) {
            alert("Game over -- You lose");
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    }
)}

