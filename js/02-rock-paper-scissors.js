//
//Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
//Rock destroys scissors.
//Scissors cut paper.
//Paper covers rock.
//Our code will break the game into 3 phases:
//User makes a choice. How will we collect the user’s choice?
//Computer makes a choice. How will we collect the computer’s choice?
//A conditional that determines who wins.
//You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:
//Begin by prompting the user for their choice.
//Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
//Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
//Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
//What if the result ends in a tie? Figure out how to handle that as well.
//What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.??


//set global variables
// User and CPU selection value

let selectionUser= prompt ("Enter Rock, Paper, Scissors").toLowerCase()
let selectionCPUArray = ['rock', 'paper', 'scissors']; 
let selectionCPU = selectionCPUArray[(Math.random() * selectionCPUArray.length) | 0]
console.log(`CPU Selection was ${selectionCPU}`)

switch (selectionUser){
    case 'rock': console.log("User selected rock")
        break
    case 'paper':console.log("User selected paper")
        break
    case 'scissors': console.log("User selected scissors")
        break
    default:
        selectionUser= "error"
        console.log(" **Error** Only enter Rock, paper, scissors")
}
// Nested Conditional Statements & Functions
function gamePlay(cpu,user) {
        if ( cpu === user){
                console.log ("Tie, try again again")
                } else if (user === "error"){
                    console.log ("**Error** Only enter Rock, paper, scissors")
                    } else if( cpu === "paper" &&  user === "scissors") { gameresults = "CPU Wins"
                    } else if( cpu === "paper" &&  user === "rock") { gameresults = "User Wins"
                    } else if( cpu === "rock" &&  user === "scissors") { gameresults = "CPU Wins"
                    } else if( cpu === "rock" &&  user === "paper") { gameresults = "User Wins"
                    } else if( cpu === "scissors" &&  user === "paper") { gameresults = "CPU Wins"
                    } else if( cpu === "scissors" &&  user === "rock") { gameresults = "User Wins"
                }
    }

function main() {
    let playAgain = 'y';
    while (playAgain === 'y') {
        gamePlay(selectionCPU,selectionUser);
        playAgain = prompt('Do you want to play again? (y or n)');
    }
    alert('Thanks for playing the game!');
}
main();