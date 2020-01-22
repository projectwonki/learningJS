

/**
 * build function to calculate factorial
 * @param {*} n 
 */
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));

/* end of build function to calculate factorial */