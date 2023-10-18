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



let SelectionCPU = Math.round(Math.random())
let SelectionUser= prompt ("Enter Rock, Paper, Scisors")




// Create variables
let coinFlip = Math.round(Math.random())
let choice= prompt("Select Heads or Tails").toLowerCase()
console.log(coinFlip)
console.log(choice)

// Nested Conditional Statements
// Added a validation in case they enter something different to Heads or Tails
if ( choice == "heads" || choice == "tails") {
    if (coinFlip >= 1) { 
        if ( choice == "heads") {document.write(`The flip was heads and you chose heads...you win`)
            } else {document.write(`The flip was heads and you chose tails...you lose`)
        } 
    }else {
        if ( choice == "heads") {document.write(`The flip was tails and you chose heads...you lose`)
            } else {document.write(`The flip was tails and you chose tails...you win`)
            }
        }
    }   
else {document.write("Try again, only enter Heads or Tails, other values will show this error")}

let coinFlip
let amountTimes = parseInt(prompt('Enter Number amount of times for the loop'))
for (let i = 1; i <= amountTimes; i++) {
    console.log(`Loop Execution # ${i}`)
    coinFlip= parseInt(Math.round(Math.random()))
    console.log(`Coin Value ${coinFlip}`)
    if (coinFlip >= 1) { 
        console.log(`Tails`)
        } else console.log(`Heads`)