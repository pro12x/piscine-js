/*
    Create a function named series that takes an array of async functions. It must execute them in series and return the results in order.
 */

const series = async (funcs) => {
    let results = []
    for (let i = 0; i < funcs.length; i++) {
        results.push(await funcs[i]())
    }
    return results
}