const fibonacci = function(n) {

    if (n < 0) {
        return "OOPS";
    }

    let a = 0;
    let b = 1;

    for (i = 2; i <= n; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
