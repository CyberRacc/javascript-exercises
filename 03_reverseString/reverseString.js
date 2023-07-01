const reverseString = function(string) {

    // Created an array that contains each character of a string that was split.
    const splitArray = string.split("");

    // Created an array with the above content in reverse order.
    const reversedArray = splitArray.reverse("");

    // This new object contains a string created by joining the reversed array.
    // It's important to note that the .join array method returns a string.
    // The two methods above (reverse, and split) return arrays.
    let reversedString = reversedArray.join("");

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
