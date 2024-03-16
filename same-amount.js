/*
    Create a function named sameAmount, that takes three arguments: a string, and 2 regular expressions. Your function should return a boolean.
    The objective is to confirm that the regular expressions match the string the same number of times.
*/

//const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

const sameAmount = (str, reg1 = /^$/, reg2 = /^$/) => {
    if (typeof str === 'string') {
        return (str.match(new RegExp(reg1, 'g')) === null || str.match(new RegExp(reg2, 'g')) === null) ? false : str.match(new RegExp(reg1, 'g')).length === str.match(new RegExp(reg2, 'g')).length
    }
    return false
}

//console.log(sameAmount('hello how are you', /l/, /e/))
//console.log(sameAmount('hello how are you', /h/, /e/))
//console.log(sameAmount('hello how are you', /he/, /ho/))

//console.log(sameAmount(data, /i/, /p/))
//console.log(sameAmount(data, /h/, /w/))
//console.log(sameAmount(data, /qqqq /, /qqqqqqq/))
//console.log(sameAmount(data, /q /, /qqqqqqq/))
//console.log(sameAmount(data, /fs[^q]/, /q /))
//console.log(sameAmount(data, /^[qs]/, /^[gq]/))
//console.log(sameAmount(data, /j/, /w/))
//console.log(sameAmount(data, /j/, / /))
//console.log(sameAmount(data, /fs./, /jn./))