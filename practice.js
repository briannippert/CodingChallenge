
/**
 * Calculate Factorial using a Loop
 * n=5
 * @param {int} n 
 */
function Lfactorial(n) {

    //Write your Code here

    return "Nothing Returned!";

}


/**
 * Calculate Factorial using Recursion
 * n=5
 * @param {int} n 
 */
function Rfactorial(n) {

    //Write your Code here

    return "Nothing Returned!";

}


/**
 * Reverse Array
 * array = [1,2,3,4,5]
 */
function RArray(array) {

    //Write your Code here

    return "Nothing Returned!";

}

/**
 * Get Maximum Number from list
 * list = [10,50,500,-2,25,83,125]
 */
function getMax(list) {

    //Write your Code here

    return "Nothing Returned!";

}

/**
 * Get sum wihle loop
 * numbers = [10,30,24,63,75]
 */
function getSumWhile(numbers) {

    //Write your Code here

    return "Nothing Returned!";

}




/**************TESTS************************ */
let total = 5;
let correct = 0;

console.log("**********Starting Tests**********")
let RFacOutput = Rfactorial(5);
if (RFacOutput == 120) {
    console.log("Recursive Factorial - Correct!");
    correct++;
} else {
    console.log("Recursive Factorial Incorrect Your Answer: " + RFacOutput.toString() + " Correct Answer is:    120");
}
let LFacOutput = Rfactorial(5);
if (LFacOutput == 120) {
    console.log("Loop Factorial - Correct!");
    correct++;
} else {
    console.log("Loop Factorial Incorrect Your Answer: " + LFacOutput.toString() + " Correct Answer is:         120");
}

let RArrayOutput = RArray([1, 2, 3, 4, 5])
if (RArrayOutput == "5,4,3,2,1") {
    console.log("Reverse Array - Correct!");
    correct++;
} else {
    console.log("Reverse Array Incorrect Your Answer: " + RArrayOutput.toString() + " Correct Answer is:  [5,4,3,2,1]");
}
let GetMaxOutput = getMax([10, 50, 500, -2, 25, 83, 125])
if (GetMaxOutput == 500) {
    console.log("Get Max - Correct!");
    correct++;
} else {
    console.log("Get Max Incorrect Your Answer: " + GetMaxOutput.toString() + " Correct Answer is:                500");
}
let getSumWhileOutput = getSumWhile([10, 30, 24, 63, 75])
if (getSumWhileOutput == 202) {
    console.log("Sum While - Correct!");
    correct++;
} else {
    console.log("Sum While Incorrect Your Answer: " + getSumWhileOutput.toString() + " Correct Answer is:              202");
}

console.log("\n");
console.log("**********Tests Finished**********")
console.log("You passed " + correct + " out of " + total + " tests!")
