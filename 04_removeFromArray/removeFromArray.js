const removeFromArray = function(array, ...itemsToRemove) {

    // Don't really understand what this code is doing, need to add
    // explanations.
    const newArray = [];
    array.forEach(item => {
        if (!itemsToRemove.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;

    // Simplified but I do not understand it, need explanation.
    //return array.filter(element => !itemsToRemove.includes(element));

};


// Do not edit below this line
module.exports = removeFromArray;
