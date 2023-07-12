// Define a function named findTheOldest that accepts an array of people as argument
const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {

        // Use the reduce method on the people array. The reduce method takes a function as argument
        // which will be applied on every element of the array, with the goal of reducing the array to a single value.
        // In this case, the aim is to find the oldest person in the array.

        // Use the ternary operator to check if a yearOfDeath property exists for the oldest person.
        // If oldest.yearOfDeath is truthy (i.e., it exists and is not 0, null, undefined, NaN, false, or an empty string),
        // then oldest.yearOfDeath will be used as the value for oldestDeathYear.
        // If oldest.yearOfDeath is falsy (i.e., it does not exist or is 0, null, undefined, NaN, false, or an empty string),
        // then new Date().getFullYear() (the current year) will be used as the value for oldestDeathYear.
        let oldestDeathYear = oldest.yearOfDeath ? oldest.yearOfDeath : new Date().getFullYear();

        // Use the ternary operator in the same way to determine the death year for the current person.
        let currentDeathYear = currentPerson.yearOfDeath ? currentPerson.yearOfDeath : new Date().getFullYear();

        // Calculate the age of the oldest person and the current person by subtracting their yearOfBirth from their death year
        let oldestAge = oldestDeathYear - oldest.yearOfBirth;
        let currentPersonAge = currentDeathYear - currentPerson.yearOfBirth;

        // Compare the age of the current person with the age of the oldest person found so far.
        // If the current person is older, return the current person. This person will be used as the 'oldest' in the next iteration.
        // If the current person is not older, return the previously found oldest person.
        // This returned value will be used as the 'oldest' argument in the next call of the function.
        if (currentPersonAge > oldestAge) {
            return currentPerson;
        } else {
            return oldest;
        }
    });
};


const multiply = function(...args) {
    return args.reduce((total, currentValue) => total * currentValue, 1)
};
  

// Do not edit below this line
module.exports = findTheOldest;
