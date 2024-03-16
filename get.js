/*
    Create a function named get which takes two arguments:
        src: an object.
        path: a string representing a path.

    Your function will return the value at the given path in the src object.
*/

const get = (src = {}, path = '') => {
    const keys = path.split('.')
    let current = src
    for (let key of keys) {
        const match = key.match(/(\w+)\[(\d+)]/)
        if (match) {
            key = match[1]
            const i = parseInt(match[2], 10)
            current = current[key] && current[key[i]]
        } else {
            current = current[key]
        }

        if (current === undefined) {
            return undefined
        }
    }
    return current
}

//console.log(get({ key: 'value' }, 'key'))
//console.log(get({ nested: { key: 'value' } }, 'nested.key'))
//console.log(get({ key: 'value' }, 'nx'))
//console.log(get({ nested: { key: 'value' } }, 'nested.nx'))
//console.log(get({ nested: { key: 'value' } }, 'nx.nx'))
//console.log(get({ a: [{ b: 't' }] }, 'a.0.b'))
//console.log(get({ a: [{ b: 't' }] }, 'a.0.b.toString'))