/*
    Create a function named series that takes an array of async functions. It must execute them in series and return the results in order.
 */

const series = async (arr) => {
    let result = []
    for (const item of arr) {
        result.push(await item());
    }
    return result
}