// Rock Paper Scissors Lizard Spock. v0.3
//Now with UI
//just saying hello!!
//console.log("Hello World!");

//Variables
let humanScore = 0,
    computerScore = 0;
    // roundNumber = 0;

const playerScoreBoard = document.querySelector('.playerScore');
const computerScoreBoard = document.querySelector('.computerScore');
const playerButtons = document.querySelector('.buttonContainer')
const gameMessage = document.querySelector('.gameMessage');
const replayButton = document.querySelector('.replayButton');

//say hi before we start
gameMessage.textContent = 'Shall we play a game!!';

//handle player button clicks
playerButtons.addEventListener('click', (event) => {
    playRound(event.target.textContent, getComputerChoice());        
});

replayButton.addEventListener('click', () => {
    //reset game
    humanScore = 0;
    computerScore = 0;
    playerScoreBoard.textContent = 0;
    computerScoreBoard.textContent = 0;
    gameMessage.textContent = 'Shall we play a game!!';
    replayButton.style.visibility = 'hidden';
});

//function to play one round of the game
function playRound(humanChoice, computerChoice) {
    //Scissors >> Paper >> Rock >> Lizard >> Spock >> 
    //Scissors >> Lizard >> paper >> Spock >> Rock >>
    //Scissors 
        
    //check to see if its a draw before doing anything else
    console.log("human " + humanChoice);
    console.log("computer " + computerChoice);
    if(humanScore < 5 && computerScore < 5) {
        if(humanChoice === computerChoice) {
            // console.log("You Both Picked " + computerChoice + "! it's a Draw!!!");
            gameMessage.textContent = "You Both Picked " + computerChoice + "! it's a Draw!!!";

        } else if((humanChoice === "Scissors" && computerChoice === "Paper") 
                || (humanChoice === "Paper" && computerChoice === "Rock") 
                || (humanChoice === "Rock" && computerChoice === "Lizard")
                || (humanChoice === "Lizard" && computerChoice === "Spock")
                || (humanChoice === "Spock" && computerChoice === "Scissors")
                || (humanChoice === "Scissors" && computerChoice === "Lizard")
                || (humanChoice === "Lizard" && computerChoice === "Paper")
                || (humanChoice === "Paper" && computerChoice === "Spock")
                || (humanChoice === "Spock" && computerChoice === "Rock")
                || (humanChoice === "Rock" && computerChoice === "Scissors")) {
            //check computer score and print message
            // console.log("You Win!! This Round!! " + humanChoice + " Beats " + computerChoice);
            gameMessage.textContent = "You Win!! This Round!! " + humanChoice + " Beats " + computerChoice;
            //increment the score
            humanScore +=1;
            playerScoreBoard.textContent = humanScore;
        }else {
            // console.log("You Lose!! This Round!! " + computerChoice + " Beats " + humanChoice);
            gameMessage.textContent = "You Lose!! This Round!! " + computerChoice + " Beats " + humanChoice;
            //increment the score
            computerScore +=1;
            computerScoreBoard.textContent = computerScore;
        }
    }else {
        console.log("The Final Score is Player " + humanScore + " Computer " + computerScore);
         //if you win print congrats if not poor you!!
        if(humanScore == computerScore) {
            console.log("Oh No!!  It's A Draw!!");
            gameMessage.textContent = "Oh No!!  It's A Draw!!";
            replayGame();
    
        }else if(humanScore > computerScore) {
            console.log("Congratulations!! You Won!!!");
            gameMessage.textContent = "Congratulations!! You Won!!!";
            replayGame();
    
        }else {
            console.log("Oh No!! You Lost!!");
            gameMessage.textContent = "Oh No!! You Lost!!";
            replayGame();
        }
    }

    //display scores
    // displayScore(roundNumber, humanScore, computerScore);
};

//make the replay button appear
function replayGame() {
    gameMessage.textContent = "If you would like to play Again Click the replay button"
    replayButton.style.visibility = "visible";

};



//function to display score and winning messages
// function displayScore(roundNumber, humanScore, computerScore) {
//     //print out current score or final score if its the last round
//     if(roundNumber < 5) {
//         console.log("The Score is currently Player " + humanScore + " Computer " + computerScore);
    
//     }else {
//         console.log("The Final Score is Player " + humanScore + " Computer " + computerScore);
//          //if you win print congrats if not poor you!!
//         if(humanScore == computerScore) {
//             console.log("Oh No!!  It's A Draw!!");
    
//         }else if(humanScore > computerScore) {
//             console.log("Congratulations!! You Won!!!");
    
//         }else {
//             console.log("Oh No!! You Lost!!");
//         }
//     }
// }

//function to get the computers choice of rock paper or scissors
function getComputerChoice() {
    //generate random number between 1 & 3
    //store in computerChoice variable
    let computerChoice = Math.floor(Math.random() * 5) + 1;
    //check if if random number is 1, 2 or 3 then return appropriate answer
    if (computerChoice == 1) {
        return "Rock";

    } else if(computerChoice == 2) {
        return "Paper";

    } else if(computerChoice == 3) {
        return "Scissors";

    }else if(computerChoice == 4) {
        return "Lizard"

    }else {
        return "Spock"
    }

}

//function to get the human players choice
// function getHumanChoice() {
//     //ask player for their Choice and store in humanChoice
//     let humanChoice = prompt("Type Rock, Paper, Scissors, Lizard Or Spock below to make your choice");
//     //make human choice all lower case and return
//     if(humanChoice.toLowerCase() === "rock") {
//         return "Rock";

//     } else if(humanChoice.toLowerCase() === "paper") {
//         return "Paper";

//     } else if(humanChoice.toLowerCase() === "scissors") {
//         return "Scissors"

//     } else if(humanChoice.toLowerCase() === "lizard") {
//         return "Lizard"

//     } else if(humanChoice.toLowerCase() === "spock") {
//         return "Spock"

//     }else {
//         alert("please only enter either Rock Paper or Scissors")
//         getHumanChoice();
//     }

// }

