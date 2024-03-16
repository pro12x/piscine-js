/*
Create a function named findExpression that takes a number as parameter and returns a string.

2 constant variables will be made available to your function: add4 and mul2.
Your goal is to try to find a sequence, starting from the number 1, and repeatedly either adding 4 or multiplying by 2, to produce the number given as a parameter.
If the number can not be reached you should return undefined
For example, for the number 8, you must first multiply by 2 twice, and then add 4. Your function should return something like: 1 *2 *2 +4.
 */

//const add4 = '+4'
//const mul2 = '*2'

const findExpression = (num) => {
    for (let i = 0; i < 40000; i++) {
        let copy = 1
        let sequence = "1"

        while (copy <= num) {
            if (copy === num) {
                return sequence
            }
            if (Math.random() < 0.4 + 0.1) {
                copy += 4
                sequence += " " + add4
            } else {
                copy *= 2
                sequence += " " + mul2
            }
        }
    }
    return undefined
}

//console.log(findExpression(8))
//console.log(findExpression(14))
//console.log(findExpression(60))
//console.log(findExpression(100))
//console.log(findExpression(200))
//console.log(findExpression(110))
//console.log(findExpression(144))
//console.log(findExpression(104))

//console.log(findExpression(7))
//console.log(findExpression(63))
//console.log(findExpression(23))
//console.log(findExpression(103))