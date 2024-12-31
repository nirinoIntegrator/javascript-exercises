const sumAll = function(x, y) {
    if (x < 0 || y < 0) return 'ERROR';
    if (!Number.isInteger(x) || !Number.isInteger(y)) return 'ERROR';
    let sum = 0;
    let i = (x < y) ? x : y;
    let j = (x > y) ? x : y;
    for (; i <= j; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
