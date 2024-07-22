//Odin | Project: Rock Paper Scissors
//create the game Rock Paper Scissors. 
//Jaycee Raven 2024
//This game will be played entirely in the console.
//just saying hello!!
//console.log("Hello World!");

//play the game
playGame();

function playGame() {
    //Variables
    let humanScore = 0,
        computerScore = 0,
        roundNumber = 0;
    //loop until 5 rounds have been achieved and print out a winner
    for(roundNumber = 1; roundNumber < 6; roundNumber++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    //function to play one round of the game
    function playRound(humanChoice, computerChoice) {
        //rock >> scissors >> paper >> rock
        //check to see if its a draw before doing anything else
        console.log("human " + humanChoice);
        console.log("computer " + computerChoice);
        if(humanChoice === computerChoice) {
            console.log("You Both Picked " + computerChoice + "! it's a Draw!!!");

        } else if((humanChoice === "Rock" && computerChoice === "Scissors") 
                || (humanChoice === "Scissors" && computerChoice === "Paper") 
                || (humanChoice === "Paper" && computerChoice === "Rock")) {
            //check computer score and print message
            console.log("You Win!! This Round!! " + humanChoice + " Beats " + computerChoice);
            //increment the score
            humanScore +=1;
        }else {
            console.log("You Lose!! This Round!! " + computerChoice + " Beats " + humanChoice);
            //increment the score
            computerScore +=1;
        }

        //display scores
        displayScore(roundNumber, humanScore, computerScore);
    }

}

//function to display score and winning messages
function displayScore(roundNumber, humanScore, computerScore) {
    //print out current score or final score if its the last round
    console.log(roundNumber);
    if(roundNumber < 5) {
        console.log("The Score is currently Player " + humanScore + " Computer " + computerScore);
    
    }else {
        console.log("The Final Score is Player " + humanScore + " Computer " + computerScore);
         //if you win print congrats if not poor you!!
        if(humanScore == computerScore) {
            console.log("Oh No!!  It's A Draw!!");
    
        }else if(humanScore > computerScore) {
            console.log("Congratulations!! You Won!!!");
    
        }else {
            console.log("Oh No!! You Lost!!");
        }
    }
}

//function to get the computers choice of rock paper or scissors
function getComputerChoice() {
    //generate random number between 1 & 3
    //store in computerChoice variable
    let computerChoice = Math.floor(Math.random() * 3) + 1;
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

