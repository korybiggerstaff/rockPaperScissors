let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
const win = new Audio('win.mp3');
const lose = new Audio('lose.mp3');

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
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
rock.style.fontSize = "large";
rock.style.width = "150px";
rock.style.height = "150px";
buttonContainer.appendChild(rock);

const paper = document.createElement("button");
paper.setAttribute("id", "paper");
paper.setAttribute("class", "playerInput");
paper.textContent = "Paper";
paper.style.fontSize = "large";
paper.style.width = "150px";
paper.style.height = "150px";
buttonContainer.appendChild(paper);

const scissors = document.createElement("button");
scissors.setAttribute("id", "scissors");
scissors.setAttribute("class", "playerInput");
scissors.textContent = "Scissors";
scissors.style.fontSize = "large";
scissors.style.width = "150px";
scissors.style.height = "150px";
buttonContainer.appendChild(scissors);

const playerScoreDisp = document.createElement("p");
playerScoreDisp.textContent = `Player score: ` + playerScore;
playerScoreDisp.style.fontSize = "48px";
scoreContainer.append(playerScoreDisp);

const compScoreDisp = document.createElement("p");
compScoreDisp.textContent = `Computer score: ` + computerScore;
compScoreDisp.style.fontSize = '48px';
scoreContainer.append(compScoreDisp);

const announce = document.createElement("p");
announce.textContent = `Press a button to play!`;
announce.style.textAlign = "center";
announce.style.fontSize = "36px";
announceBox.appendChild(announce);

buttonContainer.style.cssText = `display: flex;
gap: 8px`;
container.style.cssText = `display: flex;
align-items: center;
gap: 16px;
max-width: max-content;
padding: 8px;
margin: auto;
margin-top: 10%;
border: solid 2px black;
border-radius: 15px`;

let button = document.getElementsByClassName("playerInput");
for (let i = 0; i < button.length; i++) { // Put a click event listener on each button, which plays a round using player input
    button[i].addEventListener("click", () =>{
        playerSelection = button[i].id;
        playRound(playerSelection, computerSelection);
        playerScoreDisp.textContent = `Player score: ` + playerScore;
        compScoreDisp.textContent = `Computer score: ` + computerScore;
        if (playerScore == 5) {
            announce.textContent = "Game over -- YOU WIN!";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        } else if (computerScore == 5) {
            announce.textContent = "Game over -- You lose";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    }
)}

