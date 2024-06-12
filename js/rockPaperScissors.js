//Odin | Project: Rock Paper Scissors
//create the game Rock Paper Scissors. 
//This game will be played entirely in the console.
//just saying hello!!
console.log("Hello World!");


//Variables
let computerChoice = 0;
getComputerChoice();

console.log(computerChoice);

//function to get the computers choice of rock paper or scissors
function getComputerChoice() {
    //generate random number between 1 & 3
    //store in computerChoice variable
    computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
    //check if if random number is 1, 2 or 3 then return appropriate answer
    if (computerChoice == 1) {
        return computerChoice = "Rock";

    } else if(computerChoice == 2) {
        return computerChoice = "Paper";

    } else {
        return computerChoice = "Scissors";
    }

}