/*
    Create a function named vowelDots that receives a string. Your function should return a new string with a . after every vowel.

    Your RegEx should be stored in a variable named vowels.
        a, e, i, o and u are considered as vowels here.
*/

const vowels = /^a|e|i|o|u$/g

const vowelDots = (str) => {
    let result = ''
    if (typeof str === 'string' && str.trim() !== '') {
        if (str.trim().length === 1) {
            return str
        }
        for (let val of str) {
            if (val.toLowerCase().match(vowels)) {
                result += val + '.'
                //console.log(val + '.')
                continue
            }
            result += val
            //console.log(val)
        }
    }
    return result
}

//console.log(vowelDots('a'))
//console.log(vowelDots('something'))
//console.log(vowelDots(''))
//console.log(vowelDots('rhythm'))
//console.log(vowelDots('Algorithm'))