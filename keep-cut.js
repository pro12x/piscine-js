/*
    Create some functions, which each take a string as an argument:
        cutFirst: returns the string with the first 2 characters removed.
        cutLast returns the string with the last 2 characters removed.
        cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.
        keepFirst returns only the first 2 characters.
        keepLast returns only the last 2 characters.
        keepFirstLast returns the first 2 characters, and the last 2 characters.
*/

const cutFirst = (s = "") => {
    let result = ""

    for (let i = 2; i < s.length; i++) {
        result += s[i]
    }
    return result
}

const cutLast = (s = "") => {
    let result = "";

    for (let i = 0; i < s.length - 2; i++) {
        result += s[i]
    }
    return result
}

const cutFirstLast = (s = "") => {
    let result = "";

    for (let i = 2; i < s.length - 2; i++) {
        result += s[i]
    }
    return result
}

const keepFirst = (s = "") => {
    let result = "";

    if (s.length >= 2) {
        for (let i = 0; i < 2; i++) {
            result += s[i]
        }
    }
    return (result.length === 0) ? s : result
}

const keepLast = (s = "") => {
    let result = "";

    if (s.length >= 2) {
        for (let i = s.length - 2; i < s.length; i++) {
            result += s[i]
        }
    }
    return (result.length === 0) ? s : result
}

const keepFirstLast = (s = "") => {
    let result = "";

    if (s.length >= 4) {
        for (let i = 0; i < s.length; i++) {
            if (i >= 2 && i < s.length - 2) {
                continue
            }
            result += s[i]
        }
    }
    return (result.length === 0) ? s : result
}

//console.log(cutFirst('a'))