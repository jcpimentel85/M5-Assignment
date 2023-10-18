let step1Var1 = prompt("Enter a Number for Step 1")
//STEP 1
function halfNumber() {
    let step1Var2 = eval( step1Var1 / "2")
    console.log(`Half of ${step1Var1} is ${step1Var2}`)
}
halfNumber ()

//STEP 2
function squareNumber() {
    let step2Var2 = eval( step1Var1 * step1Var1 )
    console.log(`The results of squaring the nubmer ${step1Var1} is ${step2Var2}`)
}
squareNumber()

//STEP 3
function percentof() {
    let step3Var2 = prompt("Enter a second Number used for Step 3 & 4")
    let step3Var3 = eval( (step1Var1 / step3Var2)*100 )
    console.log(` ${step1Var1} is ${step3Var3}% of ${step3Var2}`)
}
percentof()

//STEP 4
//function findModulus() {
//
//}
//findModulus()

