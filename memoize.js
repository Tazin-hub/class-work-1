function memoize(fn) {
    let cache = {};

    return function (...args) {
        let key = JSON.stringify(args);

        if (cache[key]) {
            console.log("From Cache");
            return cache[key];
        }

        console.log("Calculated");

        let result = fn(...args);
        cache[key] = result;

        return result;
    };
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));