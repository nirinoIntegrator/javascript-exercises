const fibonacci = n => {
    if (n < 0) return 'OOPS';
    let [a, b] = [0, 1];
    while(n-- > 0) [a, b] = [b, a + b];
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
