const palindromes = function (word) {
    const alphabetAndNumbers = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedWord = word
        .toLowerCase()
        .split('')
        .filter((letter) => alphabetAndNumbers.includes(letter))
        .join('');

    const reveresedWord = cleanedWord.split('').reverse().join('');

    return cleanedWord === reveresedWord;
};

// Do not edit below this line
module.exports = palindromes;
