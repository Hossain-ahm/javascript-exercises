const removeFromArray = function(array) {
    for (var i = 1; i < arguments.length; i++) {
        let value = arguments[i]
        array = array.filter(item => item !== value); 
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
