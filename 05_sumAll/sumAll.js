const sumAll = function(num1, num2) {

    // This defines two variables 
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    let finalSum = 0;

    // Need to use a for loop.
    if (typeof num1  !== "number" || typeof num2 !== "number") {
        return "ERROR | Not a number!"
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
