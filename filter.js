/*
    Create the following functions, which each take an array as the first argument, and a function as the second argument.
        filter: that works like the [].filter method.
        reject: that works like the reject function from lodash.
        partition: that works like the partition function from lodash.
 */

const filter = (arr = [], f = () => {}) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr)) result.push(arr[i])
    }
    return result
}

const reject = (arr = [], f = () => {}) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (!f(arr[i], i, arr)) result.push(arr[i])
    }
    return result
}

const partition = (arr = [], f = () => {}) => {
    return [filter(arr, f)].concat([reject(arr, f)])
}