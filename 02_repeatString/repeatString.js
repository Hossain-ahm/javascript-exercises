const repeatString = function(string,num) {
    if (num < 0) {
        return 'ERROR'
    }
    let outcome = ''
    for (let i = 0; i < num; i++) {
        outcome += string
    }
    return outcome
};

// Do not edit below this line
module.exports = repeatString;
