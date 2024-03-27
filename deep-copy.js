/*
    Create a function named deepCopy that copies objects and arrays recursively.
 */

const type = (value) => toString.call(value).slice(8, -1)

const deepCopy = (obj) => {
    let result
    if (type(obj) === 'Object') {
        result = {}
        Object.keys(obj).forEach(key => result[key] = deepCopy(obj[key]))
    } else if (type(obj) === 'Array') {
        result = [];
        obj.forEach((item) => result.push(deepCopy(item)))
    } else {
        result = obj
    }
    return result
}

export { type,deepCopy}