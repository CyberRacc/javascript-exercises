const repeatString = function(string, num) {

    let newString;

    for (i = num; i > 1; i--) {
        newString += string;
    }

    return newString;

};

// Do not edit below this line
module.exports = repeatString;
