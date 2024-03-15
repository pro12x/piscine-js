/*
    Create 3 functions which each take (a, b) as arguments:
        multiply that acts like the * operator, without using it.
        divide that acts like the integer division operator /, without using it.
        modulo that acts like the % operator, without using it.
*/

const multiply = (a, b) => {
    return (a === 0 || b === 0) ? 0 : ((b < 0) ? multiply(-a, -b) : a + multiply(a, b-1))
}

const divide = (a, b) => {
    let div = 0
    if (a === 0) {
        return 0
    } else if (b === 0) {
        return Infinity
    } else if (b === 1) {
        return a
    } else {
        let A = Math.abs(a)
        let B = Math.abs(b)

        while (A >= B) {
            A -= B
            div++
        }
    }
    return ((a < 0 && b > 0) || (a > 0 && b < 0)) ? -div : div
}

const modulo = (a, b) => {
    return a - multiply(b, divide(a, b))
}

//console.log(divide(-3, -3))