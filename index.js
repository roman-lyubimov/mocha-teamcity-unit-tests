function fib(x) {
    if (0 === x || 1 === x) {
        return x;
    }

    return fib(x-1) + fib(x-2);
}

exports.fib = fib;
