/*
    Create some functions which behave like JavaScript's Math rounding functions:
        round: which behaves similar to Math.round().
        ceil: which behaves similar to Math.ceil().
        floor: which behaves similar to Math.floor().
        trunc: which behaves similar to Math.trunc().

    Some restrictions apply:
        You may not use strings conversion to do it
        No bitwise operator
        No % operator
*/

/**
 * @param num
 * @returns {number}
 */
const round = (num = 0) => {
    let mod = (num > 0) ? num * 10 : -10 * num
    let count = 0

    while (mod >= 10) {
        mod -= 10
        count++
    }
    return (mod >= 5) ? ((num >= 0) ? count + 1 : -(count + 1)) : ((num >= 0) ? count : -(count))
}

/**
 * @param num
 * @returns {number|number}
 */
const floor = (num = 0) => {
    let mod = (num > 0) ? num * 10 : -10 * num
    let count = 0

    while (mod >= 10) {
        mod -= 10
        count++
    }
    return (mod >= 5) ? ((num >= 0) ? count : -(count + 1)) : ((num >= 0) ? count : -(count + 1))
}

/**
 * @param num
 * @returns {number|number}
 */
const trunc = (num = 0) => {
    let mod = (num > 0) ? num * 10 : -10 * num
    let count = 0

    while (mod >= 10) {
        mod -= 10
        count++
    }
    return (num >= 0) ? count : -count
}

/**
 * @param num
 * @returns {number|number}
 */
const ceil = (num = 0) => {
    let mod = (num >= 0) ? num * 10 : -10 * num
    let count = 0

    while (mod >= 10) {
        mod -= 10
        count++
    }
    return (num >= 0) ? ((mod === 0) ? count : count + 1) : ((mod === 0) ? -count : -count)
}

//const num = [4, -3, 3, -2, 0] //
//console.log(num.map(ceil))