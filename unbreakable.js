/*
    Implement 2 functions:
        split that works like String.split, but takes the string as its first argument.
        join that works like Array.join, but take the array as its first argument.
*/


const split = (str, sep) => {
    let result = []
    if (typeof str === 'string') {
        let s = ''
        if (sep === undefined) {
            sep = '';
        }
        for (let i = 0; i < str.length; i++) {
            if (str.substring(i, i + sep.length) === sep) {
                result.push(s)
                s = ''
                i = i + sep.length - 1
                continue
            }
            s += str[i]
            console.log(str.length, i+sep.length)
            if (i + sep.length > str.length - 1) {
                break
            }
        }
        result.push(s)
        return result
    }
    return result
}

const join = (arr, sep) => {
    if (sep === null) {
        sep = ','
    }
    let result = arr[0].toString()
    for (let i = 0; i < arr.length; i++) {
        result += sep + arr[i]
    }
}

//let len = split('ggg - ddd - b', ' - ').length

console.log(split('ee,ff,g,', ','))