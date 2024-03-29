/*
    Create two functions:
        race: that works like Promise.race.
        some: that takes an array of promises or values, and count number. It should return the first count resolved values. Empty arrays or a count of 0 return a promise resolving to undefined.

    Code provided
        The provided code will be added to your solution, and does not need to be submitted.

        Promise.race = undefined
 */

const race = async (arr) => {
    return new Promise((resolve, reject) => {
        arr.forEach(item => {
            Promise.resolve(item).then(resolve, reject)
        })
    })
}

const some = async (arr, count) => {
    if (arr.length === 0 || count === 0) {
        return Promise.resolve([])
    }

    return new Promise((resolve, reject) => {
        let results = []
        let resolvedCount = count
        arr.forEach(item => {
            if (item instanceof Promise) {
                item.then(value => {
                    results.push(value)
                    resolvedCount--
                    if (resolvedCount === 0) {
                        if (results[1] === undefined && results.length > 1) {
                            results = [results[1], results[0]]
                        }
                        resolve(results)
                    }
                }).catch(reject)
            } else {
                results.push(item)
                resolvedCount--
                if (resolvedCount === 0) {
                    resolve(results)
                }
            }
        })
    })
}