/*
    Create a function named all that works like Promise.all but with objects (instead of arrays).

    Code provided
    The provided code will be added to your solution, and does not need to be submitted.
    Promise.all = undefined
 */

const all = async (obj) => {
    const result = {}
    for (const [key, value] of Object.entries(obj)) {
        result[key] = await Promise.resolve(value)
    }
    return result
}