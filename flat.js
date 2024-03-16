/*
    Create a function named flat that works like Array.flat(), except its first argument is the array.

    Notions
        Flat

    Code provided
        The provided code will be added to your solution, and does not need to be submitted.

        Array.prototype.flat = undefined
*/

const flat = (arr, depth) => {
    if (Array.isArray(arr) && depth !== 0) {
        depth = (depth === undefined) ? 1 : depth
        return arr.reduce((accumulator, currentTable) => {
            return accumulator.concat(flat(currentTable, depth - 1));
        }, [])
    }
    return arr
}

//console.log("========= My Work ===========")
//console.log(flat([1])) // [1]
//console.log(flat([1, [2]])) // [1, 2]
//console.log(flat([1, [2, [3]]])) // [1, 2, [3]]
//console.log(flat([1, [2, [3], [4, [5]]]], 2)) // [1, 2, 3, 4, [5]]
//console.log(flat([1, [2, [3], [4, [5]]]], 3)) // [1, 2, 3, 4, 5]
//console.log(flat([1, [2, [3], [4, [5]]]], Infinity)) // [1, 2, 3, 4, 5]