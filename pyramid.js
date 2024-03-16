/*
    Create a function named pyramid which works just like your triangle function. But, it should be pyramid shaped.

    Output example
        * character and depth of 5 :
            *
           ***
          *****
         *******
        *********
    No new line in last line
*/

const pyramid = (str, num) => {
    let result = ''
    let space = ' '.repeat(str.length)
    for (let i = 0; i < num; i++) {
        if (i !== 0) {
            result += '\n'
        }
        const spaces = space.repeat(num - i - 1)
        const chars = str.repeat(2 * i + 1)
        result += spaces + chars
    }
    return result
}

//console.log(pyramid('a', 5))
//console.log(pyramid('+', 10))
//console.log(pyramid('#', 40))
//console.log(pyramid('{}', 12))
//console.log(pyramid('ABC', 7))
//console.log(pyramid('<^>', 13))