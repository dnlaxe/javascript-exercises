const sumAll = function(start, end) {
    
    // "destructuring assignment"
    if (start > end) {
        start = start + end;
        end = start - end;
        start = start -end;
    };

    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    
    let sum = 0; 
    for (i = start; i <= end; i++) sum += i;
    return sum
};

// Do not edit below this line
module.exports = sumAll;
