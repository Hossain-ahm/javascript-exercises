const palindromes = function (input) {
    let processedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    return processedInput.split('').reverse().join('') == processedInput
};

// Do not edit below this line
module.exports = palindromes;
