/*
    Create a function named triangle that takes a string and a number as arguments. Your function will return a string representing a triangle.

    The string will denote the characters which construct the triangle, and the number denotes its height.

    Example
    * character and depth of 5:
        *
        **
        ***
        ****
        *****
    No new line in last line
*/

const triangle = (str, num) => {
    let result = ''
    for (let i = 0; i < num; i++) {
        if (i !== 0) {
            result += '\n'
        }
        for (let j = 0; j <= i; j++) {
            result += str
        }
    }
    return result
}

//console.log(triangle('#', 4))
//console.log(triangle('a', 5))
//console.log(triangle('+', 10))
//console.log(triangle('{}', 29))