/*
    Create a function named letterSpaceNumber that accepts a string; returning an array with every instance of a letter, followed by a space, followed by a number, only if that number has only one digit, and is not followed by any letter.
    Examples
        console.log(letterSpaceNumber('example 1, example 20'))
        // output: ['e 1']
*/

const letterSpaceNumber = (str) => {
    let result = []
    //console.log(str)
    if (typeof str === 'string' && str.trim() !== '') {
        let regex = str.match(/\w+\s\d\w*/g)
        for (let i = 0; i < regex.length; i++) {
            let tab = regex[i].split(' ')
            if (tab[1].match(/^\d$/g)) {
                let s = tab[0][tab[0].length - 1] + ' ' + tab[1]
                result.push(s)
                //console.log(s)
            }
        }
    }
    return result
}

//console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))
//console.log(letterSpaceNumber('example 1, example 2'))
//console.log(letterSpaceNumber('I like 7up'))
//console.log(letterSpaceNumber('It\'s 20 past 3'))
//console.log(letterSpaceNumber(''))
//console.log(letterSpaceNumber('Definitely 9.'))
