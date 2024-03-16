/*
    Create a function named nasa that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. There are three exceptions:
        Convert numbers which are divisible by 3 to "NA".
        Convert numbers which are divisible by 5 to "SA".
        Convert numbers which are divisible by 3 and 5 to "NASA".
*/
const nasa = (n) => {
    let result = '';
    if (typeof n === 'number') {
        for(let i = 0; i < n; i++) {
            let cal = i + 1
            result += (cal === 1) ? '' : ' '
            result += (cal % 3 === 0 && cal % 5 === 0) ? 'NASA' : ((cal % 3 === 0) ? 'NA' : (cal % 5 === 0) ? 'SA' : cal)
        }
    }
    return result
}

console.log(nasa(15))