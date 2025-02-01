const removeFromArray = function(array, ...toBeRemoved) {
    return array.filter(item => !toBeRemoved.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
