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

const int = (num) => {
    let sign = Math.sign(num)
    if(num < 0) {
        num = num * -10
    } else {
        num = 10 * num
    }
    let count = 0
    while (num >= 10) {
        num -= 10
        count++
    }
    return [num, count]
}

/**
 * @param num
 * @returns {number|number}
 */
const trunc = (num = 0) => {
    if (num <= 0xfffffffff) {
        let sign = Math.sign(num)
        let arr = int(num)
        return sign * arr[1]
    } else {
        let greater = num - 0xfffffffff
        let sign = Math.sign(greater)
        let arr = int(greater)
        return sign * arr[1] + 0xfffffffff
    }
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

//console.log(trunc( 5.8))
//console.log(trunc(0xfffffffff + 5))