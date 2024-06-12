//Odin | Project: Rock Paper Scissors
//create the game Rock Paper Scissors. 
//This game will be played entirely in the console.
//just saying hello!!
console.log("Hello World!");

//Variables
let humanScore = 0,
    computerScore = 0;
    console.log(humanScore + " / " + computerScore);
//testing!! Call functions and log to console
console.log("Computers Choice Is " + getComputerChoice());
console.log("Human Choice Is " + getHumanChoice());

//function to get the computers choice of rock paper or scissors
function getComputerChoice() {
    //generate random number between 1 & 3
    //store in computerChoice variable
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
    //check if if random number is 1, 2 or 3 then return appropriate answer
    if (computerChoice == 1) {
        return "Rock";

    } else if(computerChoice == 2) {
        return "Paper";

    } else {
        return "Scissors";
    }

}

//function to get the human players choice
function getHumanChoice() {
    //ask player for their Choice and store in humanChoice
    let humanChoice = prompt("Type Rock, Paper Or Scissors below to make your choice");
    console.log(humanChoice);
    //make human choice all lower case and return
    if(humanChoice.toLowerCase() === "rock") {
        return "Rock";

    } else if(humanChoice.toLowerCase() === "paper") {
        return "Paper";

    } else if(humanChoice.toLowerCase() === "scissors") {
        return "Scissors"

    }else {
        alert("please only enter either Rock Paper or Scissors")
        getHumanChoice();
    }

}





