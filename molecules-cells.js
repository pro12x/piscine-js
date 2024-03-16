/*
    Create two functions which accept a string, and return a string:
        RNA: that converts a DNA strand into its compliment RNA strand.
        DNA: that converts an RNA strand into its compliment DNA strand.

    Compliments:
        DNA | RNA
         G  -  C
         C  -  G
         T  -  A
         A  -  U
    Each strand must be represented as upper case string, without spaces, eg: "ATCG" is a valid DNA strand.
*/

const DNA = (str) => {
    let result = ''
    if (typeof str === 'string') {
        if (str.trim() === '') {
            return ''
        }
        for (let val of str) {
            result += (val.trim() === 'A') ? 'T' : ((val.trim() === 'U') ? 'A' : ((val.trim() === 'G') ? 'C' : 'G'))
        }
    }
    return result.toUpperCase()
}

const RNA = (str) => {
    let result = ''
    if (typeof str === 'string') {
        if (str.trim() === '') {
            return ''
        }
        for (let val of str) {
            result += (val.trim() === 'A') ? 'U' : ((val.trim() === 'T') ? 'A' : ((val.trim() === 'G') ? 'C' : 'G'))
        }
    }
    return result.toUpperCase()
}

//console.log(RNA(''))
//console.log(RNA('TAGC'))
//console.log(RNA(DNA('AUCG')))
//console.log(RNA(DNA('CAUG')))

//console.log(DNA(''))
//console.log(DNA('AUCG'))
//console.log(DNA(RNA('TAGC')))
//console.log(DNA(RNA('GCAT')))