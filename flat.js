/*
    Create a function named flat that works like Array.flat(), except its first argument is the array.

    Notions
        Flat

    Code provided
        The provided code will be added to your solution, and does not need to be submitted.

        Array.prototype.flat = undefined
*/

const flat = (arr, depth) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Expected an array');
    }

    if (depth <= 0) {
        return arr.slice();
    }

    const result = [];

    for (const element of arr) {
        if (Array.isArray(element)) {
            result.push(...flat(element, depth - 1));
        } else {
            result.push(element);
        }
    }

    return result;
}