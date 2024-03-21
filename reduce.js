/*
    Create four functions:
        fold that receives an array, a function and an accumulator, in this order, and applies the function in the elements of the array starting on the left.
        foldRight that receives an array, a function and an accumulator, in this order, and applies the function in the elements of the array starting on the right.
        reduce that works just like the method [].reduce when you don't specify an accumulator. The arguments should be an array and a function. The starting value of your accumulator must be the first value of the array. If your array is less than 1 argument you should throw an error.
        reduceRight like reduce, from the last value to the first

    Example:
        const adder = (a, b) => a + b
        fold([1, 2, 3], adder, 2) // returns 8 (2 + 1 + 2 + 3)
        foldRight([1, 2, 3], adder, 2) // returns 8 (2 + 3 + 2 + 1)
        reduce([1, 2, 3], adder) // returns 6 (1 + 2 + 3)
        reduceRight([1, 2, 3], adder) // returns 6 (3 + 2 + 1)
        The use of [].reduce and [].reduceRight is forbidden for this exercise.
 */

const fold = (arr = [], f = () => {}, acc = 0) => {
    return arr.map(value => acc = f(acc, value))[arr.length - 1]
    /*for (let i = 0; i < arr.length; i++) {
        acc = f(acc, arr[i], i, arr)
    }
    return acc*/
}

const foldRight = (arr = [], f = () => {}, acc = 0) => {
    return arr.slice().reverse().map(value => acc = f(acc, value))[arr.length - 1]
    /*for (let i = arr.length - 1; i >= 0; i--) {
        acc = f(acc, arr[i], i, arr)
    }
    return acc*/
}

const reduce = (arr = [], f = () => {}) => {
    return (arr.length >= 1) ? fold(arr.slice(1), f, arr[0]) : "Error"
    /*for (let i = 0; i < arr.length; i++) {
        acc = f(acc, arr[i], i, arr)
    }
    return acc*/
}

const reduceRight = (arr = [], f = () => {}) => {
    return (arr.length >= 1) ? ((typeof arr[0] === 'string') ? foldRight(arr, f, '') : reduce(arr, f)) : "Error"
    /*for (let i = arr.length - 1; i >= 0; i--) {
        acc = f(acc, arr[i], i, arr)
    }
    return acc*/
}