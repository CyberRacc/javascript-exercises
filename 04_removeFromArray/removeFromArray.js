const removeFromArray = function(array, ...args) {

    function toRemove() {

        array.includes(args);
     
    }

    array.filter(toRemove);

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
