const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        let currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        oldest = 
        if (currentPersonAge > oldest) {
            return oldest;
        }
    });
};


const multiply = function(...args) {
    return args.reduce((total, currentValue) => total * currentValue, 1)
};
  

// Do not edit below this line
module.exports = findTheOldest;
