const sumAll = function(num1, num2) {

    // This defines two variables 
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    let finalSum = 0;

    // Used if condition to check if num1, num2 are numbers.
    // Also to check if num1, num2 are negative.
    if (typeof num1  !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
        return "ERROR"
    } else {
        for (let i = min; i <= max; i++) {

            // This line is equivalent to finalSum = finalSum + i;
            finalSum += i;
            // It is simply a more concise way of writing it.

        }
        return finalSum;
    }
  
};

// Do not edit below this line
module.exports = sumAll;
