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


//set variables
let selectionCPU = 0
let selectionUser = 0
let gameresults
// User and CPU selection value
// Nested Conditional Statements & Functions

function gameselectionCPU(){
let selectionCPUArray = ['rock', 'paper', 'scissors']; 
selectionCPU = selectionCPUArray[(Math.random() * selectionCPUArray.length) | 0]
console.log(`CPU selection was ${selectionCPU}`)
return selectionCPU
}

function gameselectionUser(){
    selectionUser= prompt ("Enter Rock, Paper, Scissors").toLowerCase()
    switch (selectionUser){
        case 'rock': console.log("User selection was rock")
            break
        case 'paper':console.log("User selection was paper")
            break
        case 'scissors': console.log("User selection was scissors")
            break
        default:
            selectionUser= "error"
            console.log(" **Error** Only enter Rock, paper, scissors")
        }
    return selectionUser
    }
    

function gamePlay(cpu,user) { 
if ( cpu === user){
    console.log ("Tie, try again again")
    } else if (user === "error"){
        console.log ("**Error** Only enter Rock, paper, scissors")
        } else if( selectionCPU === "paper" &&  selectionUser === "rock") { console.log("CPU Wins")
        } else if( selectionCPU === "rock" &&  selectionUser=== "scissors") { console.log("CPU Wins")
        } else if( selectionCPU === "rock" &&  selectionUser === "paper") { console.log("User Wins")
        } else if( selectionCPU === "scissors" &&  selectionUser === "paper") { console.log("CPU Wins")
        } else if( selectionCPU === "scissors" &&  selectionUser === "rock") { console.log("User Wins")
    }
return gameresults
}



function main() {
let selectionCPU2 
let selectionUser2 
let playAgain = "n"
do {
    selectionCPU2 = gameselectionCPU()
    selectionUser2 = gameselectionUser()
    console.log (`Selection CPU 2 ${selectionCPU2}`)
    console.log (`Selection User 2 ${selectionUser2}`)
    gamePlay(selectionCPU2,selectionUser2);
    console.log(gameresults)
    playAgain = prompt('Do you want to play again? (y or n)')
    } while (playAgain === 'y') 
    alert('Thanks for playing the game!')
}
main();