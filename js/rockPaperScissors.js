//Odin | Project: Rock Paper Scissors
//create the game Rock Paper Scissors. 
//This game will be played entirely in the console.
//just saying hello!!
console.log("Hello World!");

//Variables
let computerChoice = 0;
let humanChoice = "";

//testing!! Call functions to make sure they work
getComputerChoice();
getHumanChoice();

//check variables in console
console.log("Computers Choice Is " + computerChoice);
console.log("Human Choice Is " + humanChoice);

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

//function to get the human players choice
function getHumanChoice() {
    //ask player for their Choice and store in humanChoice
    humanChoice = prompt("Type Rock, Paper Or Scissors below to make your choice");
    console.log(humanChoice);
    //make human choice all lower case and return
    if(humanChoice.toLowerCase() === "rock") {
        return humanChoice = "Rock";

    } else if(humanChoice.toLowerCase() === "paper") {
        return humanChoice = "Paper";

    } else if(humanChoice.toLowerCase() === "scissors") {
        return humanChoice = "Scissors"

    }else {
        alert("please only enter either Rock Paper or Scissors")
        getHumanChoice();
    }

}





