/*
    Create a function named slice that works like Array.slice() and String.slice().
    It takes 3 arguments:
        string or array to process.
        starting index.
        optional ending index.
*/

const slice = (...args) => {
    const strOrArray = args[0]
    if (typeof strOrArray === 'string' || Array.isArray(strOrArray)) {
        let result1 = '';
        let result2 = [];

        if (args[2] === undefined || args.length === 2) {
            if (args[1] < 0) {
                let j = 0
                for (let i = strOrArray.length + args[1]; i < strOrArray.length; i++) {
                    if (typeof strOrArray === 'string') {
                        result1 += strOrArray[i]
                    } else {
                        result2[j] = strOrArray[i]
                    }
                    j++
                }
            } else {
                let j = 0
                for (let i = args[1]; i < strOrArray.length; i++) {
                    if (typeof strOrArray === 'string') {
                        result1 += strOrArray[i]
                    } else {
                        result2[j] = strOrArray[i]
                    }
                    j++
                }
            }
        } else {
            if (args[1] < 0 && args[2] < 0) {
                let j = 0
                for (let i = -args[1]; i < strOrArray.length + args[2]; i++) {
                    if (typeof strOrArray === 'string') {
                        result1 += strOrArray[i]
                    } else {
                        result2[j] = strOrArray[i]
                    }
                    j++
                }
            } else if (args[1] >= 0 && args[2] >= 0) {
                let j = 0
                for (let i = args[1]; i <= args[2] - 1; i++) {
                    if (typeof strOrArray === 'string') {
                        result1 += strOrArray[i]
                    } else {
                        result2[j] = strOrArray[i]
                    }
                    j++
                }
            } else {
                let j = 0
                for (let i = args[1]; i <= -args[2] + 1; i++) {
                    if (typeof strOrArray === 'string') {
                        result1 += strOrArray[i]
                    } else {
                        result2[j] = strOrArray[i]
                    }
                    j++
                }
            }
        }
        return (typeof strOrArray === 'string') ? result1 : result2
    }
    return 0
}

//console.log(slice('abcdef', -3, -1))