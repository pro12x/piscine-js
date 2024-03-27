/*
    Create a function named replica that allows you to deep assign the values of all properties from one or more objects to a target object.
    Watch out for shallow copies.
 */

const replica = (target, ...sources) => {
    sources.forEach((source) => {
        Object.entries(source).forEach(([key, value]) => {
            target[key] = (toString.call(value).slice(8, -1) === 'Object' && toString.call(target[key]).slice(8, -1) === 'Object') ? replica(target[key], value) : value
        })
    })
    return target
}
