/*
    Create a map function that takes an array as the first argument, a function as second, and that works like the method .map
Create a flatMap function that takes an array as the first argument, a function as second, and that works like the method .flatMap
 */

const map = (arr = [], f = () => {}) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(f(arr[i], i, arr))
    }
    return result
}

const flatMap = (arr = [], f = () => {}) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result = result.concat(f(arr[i], i, arr))
    }
    return result
}