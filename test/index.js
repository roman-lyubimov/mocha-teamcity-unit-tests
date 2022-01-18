const assert = require('assert');
const fib = require('../index').fib;

describe('fib', function () {
    describe('edge cases', function () {
        it('fib(0) === 0', function () {
            assert.equal(fib(0), 0);
        });

        it ('fib(1) === 1', function () {
            assert.equal(fib(1), 1);
        });
    });



    const x = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [1, 2, 3, 5, 8, 13, 21, 34, 55];

    for (let i = 0; i < x.length; i++) {
        it(`fib(${x[i]}) === ${expected[i]}`, function () {
            assert.equal(fib(x[i]), expected[i]);
        });
    }
});
