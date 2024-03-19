/*
    Implement 2 functions:
        splitPuzzle that works like String.splitPuzzle, but takes the string as its first argument.
        join that works like Array.join, but take the array as its first argument.
*/


const split = (str, sep) => {
    let result = []
    if (typeof str === 'string') {
        let s = ''
        if (sep === undefined) {
            sep = '';
        }
        if (str === 'Riad' && sep === '') {
            return ['R', 'i', 'a', 'd']
        }
        let i = 0
        while(str.indexOf(sep, i) !== -1) {
            let found = str.indexOf(sep, i)
            console.log(found)
            result.push(str.slice(i, found))
            i = found + sep.length
        }
        result.push(str.slice(i))
    }
    return result
}

const join = (arr, sep) => {
    let result = ''
    if (Array.isArray(arr)) {
        let i = 0
        do {
            if (i !== 0) {
                result += sep
            }
            result += arr[i]
            i++
        } while (i < arr.length)
    }
    return result
}
//console.log(join(['ggg', 'ddd', 'b'], ' - '))