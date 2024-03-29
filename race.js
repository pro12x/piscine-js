/*
    Create two functions:
        race: that works like Promise.race.
        some: that takes an array of promises or values, and count number. It should return the first count resolved values. Empty arrays or a count of 0 return a promise resolving to undefined.

    Code provided
        The provided code will be added to your solution, and does not need to be submitted.

        Promise.race = undefined
 */

const race = async (arr) => {
    return
    /*const result = await Promise.race(arr)
    if (count === 0) {
        return result
    }
    return race(arr.filter(item => item!== result), count - 1)*/
}

const some = async (arr, count) => {
    if (count === 0) {
        return undefined
    }
    const result = await Promise.race(arr)
    return some(arr.filter(item => item!== result), count - 1)
}