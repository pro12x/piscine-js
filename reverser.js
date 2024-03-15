/*
    Create a function named reverse which accepts an array or a string. It should work like Array.reverse(), and of course you cannot use that.
*/

/**
 * @param args
 * @returns {string|*[]}
 */
const reverse = (args) => {
    let result = (typeof args === 'string') ? '' : []
    let j = 0
    for (let i = args.length - 1; i >= 0; i--) {
        if (typeof args === 'string') {
            result += args[i]
        } else {
            result[j] = args[i]
            j++
        }
    }
    return result
}

//const array1 = ['one', 'two', 'three']
//console.log(array1)
//console.log(array1.reverse())