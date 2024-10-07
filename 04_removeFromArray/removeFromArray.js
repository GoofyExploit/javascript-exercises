const removeFromArray = function(array, ...elementsToRemove) {
    // Create a new empty array for the result
    const newArray = [];

    // Loop through the original array
    for (let i = 0; i < array.length; i++) {
        // Assume the element should be included
        let include = true;

        // Check if the current element is in elementsToRemove
        for (let j = 0; j < elementsToRemove.length; j++) {
            if (array[i] === elementsToRemove[j]) {
                include = false;
                break;
            }
        }

        // If the element is not in elementsToRemove, add it to the newArray
        if (include) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
