/*
    Create a function named isPositive that takes a number as a argument, returning true if the number is strictly positive, and false otherwise.
    Create a function named abs that takes a number as an argument and returns its absolute value. You must make your own implementation. You must not use Math.abs().
*/

function isPositive(number) {
    return number > 0
}

function abs(number) {
    return (number >= 0) ? number : -number
}