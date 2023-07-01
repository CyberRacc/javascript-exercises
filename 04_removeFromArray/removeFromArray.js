const removeFromArray = function(array, ...args) {

    function toRemove(array, ...args) {

        let arrayIndex = array.indexOf(...args);

        array.splice(arrayIndex);

        return array;
     
    }

    array.filter(toRemove);

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
