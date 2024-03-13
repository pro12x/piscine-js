/*
    Create a function named sign that takes one number argument; returning 1 if the number is positive, -1 if the number is negative and 0 if the number is exactly 0.
        You must not just use Math.sign, make your own.

    Create a function named sameSign that takes 2 numbers as arguments and returns true if they both have the same sign, or false otherwise.
*/

function sign(a) {
    if (a > 0) {
        return 1
    } else if (a < 0) {
        return -1
    } else {
        return 0
    }
}

function sameSign(a, b) {
    return ((a === 0 && b === 0 ) || (a * b > 0))
}