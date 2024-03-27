/*
    Create a function named invert which takes an object and returns a new one with its keys and values inverted.
 */

const invert = (obj = {}) => {
    Object.setPrototypeOf(obj,null)
    const result = {}
    for (let key in obj) {
        result[obj[key]] = key
    }
    Object.freeze(result)
    return result
}

//const obj = { f: 5, __proto__: { d: 6 }}
//console.log(obj.__proto__)

//console.log(invert(obj))