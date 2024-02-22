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
console.log(getComputerChoice())