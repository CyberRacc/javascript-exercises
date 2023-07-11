const palindromes = function (string) {

    let stringLower = string.toLowerCase();

    let cleanedString = stringLower.replace(/[^a-z0-9]/g, '');

    const stringArray = cleanedString.split("");

    const reversedArray = stringArray.reverse();

    let reversedString = reversedArray.join("");

    if (cleanedString === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
