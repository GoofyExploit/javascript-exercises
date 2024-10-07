const reverseString = function(word) {
    let wordArray = word.split('')
    let result = []
    let firstLetter
    for (const letters of wordArray) {
        result.unshift(letters)
    }
    return result.join('')
};

// Do not edit below this line
module.exports = reverseString;
