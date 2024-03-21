/*
    Create three functions, which each accept an array as an argument.
        longWords: returns true if every element of the array is a string with at least 5 characters.
        oneLongWord: returns true if at least one element of the array is a string with 10 or more characters.
        noLongWords: returns true if there are no elements in the array which is a string with at least 7 characters.
 */

const longWords = (arr = ['']) => {
    return arr.every(word => word.length >= 5)
}

const oneLongWord = (arr = ['']) => {
    return arr.some(word => word.length >= 10)
}

const noLongWords = (arr = ['']) => {
    return arr.every(word => word.length < 7)
}

//let arr1 = ['fill', 'carbon', 'chart', 'glare', 'express']
//let arr2 = ['double', 'afford', 'coalition', 'reaction', 'persist']
//let arr3 = ['leak', 'talk', 'bite', 'slip', 'free']
//let arr4 = ['fixture', 'opponent', 'coincide', 'residential', 'relaxation']

//console.log(longWords(arr1))
//console.log(longWords(arr2))
//console.log(longWords(arr3))
//console.log(longWords(arr4))

//console.log(oneLongWord(arr1))
//console.log(oneLongWord(arr2))
//console.log(oneLongWord(arr3))
//console.log(oneLongWord(arr4))

//console.log(noLongWords(arr1))
//console.log(noLongWords(arr2))
//console.log(noLongWords(arr3))
//console.log(noLongWords(arr4))