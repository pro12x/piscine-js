/*
    Create 3 functions which accept an array to be searched, and a value to be matched.
        indexOf: which returns the index of the first occurrence. It also accepts an optional index from where the search should begin. If the value was not found, -1 is returned.
        lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
        includes: which returns true if the value was found in the array, and false otherwise.

    Of course, you must not use any of Array.indexOf(), Array.lastIndexOf() or Array.includes().
*/

const indexOf = (arr = [], value, start = -1) => {
    let index = 0;
    let startIndex = (start !== -1) ? start : 0

    for (let i = startIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            index = i
            break
        }
        index = -1
    }

    /*do {
        if (arr[index] === value) {
            break;
        }
        index++
    } while (index < arr.length)*/

    /*while (index < arr.length) {
        if (arr[index] === value) {
            break
        }
        index++
    }*/

    return index
}
const lastIndexOf = (arr = [], value, start = -1) => {
    let index = 0
    let startIndex = (start !== -1) ? start : arr.length - 1

    for (let i = startIndex; i >= 0; i--) {
        if (arr[i] === value) {
            index = i
            break
        }
        index = -1
    }
    return index
}
const includes = (arr = [], number) => {
    return indexOf(arr, number) !== -1
}