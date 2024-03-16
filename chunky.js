/*
    Create a function named chunk which accepts an array and an integer representing a size.
    Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements. The length of each sub-array is denoted by the size argument.
    If the array cannot be split evenly, the last sub-array will contain the remaining elements.
*/

const chunk = (...args) => {
    let result = [];
    if (Array.isArray(args[0])) {
        if (args[1] === undefined || args[1] === 1) {
            return args[0]
        }
        let arr = []
        let j = 0
        for (let i = 0; i < args[0].length; i += args[1]) {
            result.push(args[0].slice(i, i + args[1]))
        }
    }
    return result
}

//console.log(chunk(['a', 'b', 'c', 'd'], 2)) // [['a', 'b'], ['c', 'd']]
//console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)) // [['a', 'b', 'c'], ['d']]