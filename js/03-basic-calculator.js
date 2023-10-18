/*
The Basic Calculator (25 points)

In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards
 to functions. You will ask the user for a number, a second number, and then finally ask them what kind of 
 operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, 
 you will perform that operation. To complete this part of the assignment follow the steps outlined here:

Create a function that will serve as the main calculation logic of your application. This function should be 
called calculate and will accept three parameters: x, y, and operation.
In the script, prompt the user for a number and store that in a variable. Convert that to a number.
Then, prompt the user for a second number and store that in a variable. Convert that to a number.
Next, prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and
 store that in a variable.
Finally, pass the three parameters into the calculate function to return the result of the calculation. 
You'll need to add a switch statement inside the calculate function to evaluate the operation and perform 
the appropriate calculation on the x and y numbers based on the operation passed in. 
Display the result of the calculation within an alert.
Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, 
they are displayed an alert message telling them that. Then you’ll have to rerun the application so that 
the application asks the user for the numbers and operation once more. You’ll have to add this functionality
 within a do while loop similarly how the labs were done in the previous lecture.
*/
// ADD A FUNCTION CALLED CALCULATE
function calculate(){
// COLLECT FIRST NUMBER FROM USER
let calcNum1 = parseInt(prompt("Enter first number for calculation"))
// COLLECT SECOND NUMBER FROM USER
let calcNum2 = parseInt(prompt("Enter second number for calculation"))
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let calcValue = prompt(`
What Operation you want to execute? 
Please enter one of the following values:  + , - , *, /`)
let result
let valError
switch (calcValue){
    case '+': result = calcNum1 + calcNum2
        break
    case '-': result = calcNum1 - calcNum2
        break
    case '*': result = calcNum1 * calcNum2
        break
    case '/': result = calcNum1 / calcNum2
        break
    default: 
        valError = "error"
        alert(" **Error** Enter only one of the following operations + , - , *, /")
    }
if (valError === "error"){
}
else { alert (`The results is ${result}`)}
return {valError,result}
}

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
calculate()
alert (`Thank you for using the calculator`)


