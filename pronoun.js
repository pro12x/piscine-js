/*
    Create a function named pronoun that accepts a string parameter. This function returns an object that will have all the personal pronouns, present in the string, as keys. Each key will have a sub object with the first word after each of the personal pronouns found in the string.

    You must also a count property to the sub object, with the amount of occurrences of the pronoun.

    Pronouns:
        i
        you
        he
        she
        it
        they
        we

    Example
        const ex = 'Using Array Destructuring, you you can iterate through objects easily.'

        { you: { word: [ 'can' ], count: 2 } }

        const ex = 'If he you want to buy something you have to pay.'

        {
          he: { word: [], count: 1}
          you: { word: [ 'want', 'have' ], count: 2 }
        }
 */

const pronoun = (str) => {
    const tab = ['i','you','he','she','it','we','they']
    const arr = str.toLowerCase().match(/\w+/ig)
    let result = {}
    arr.forEach((val, index) =>{
        if (tab.includes(val.toLowerCase())) {
            if (!(val in result)) {
                result[val] = {word: [], count: 0}
            }
            if (arr[index + 1]!== undefined && !(tab.includes(arr[index + 1].toLowerCase()))) {
                result[val]['word'].push(arr[index + 1])
            }
            result[val]['count'] += 1
        }
    })
    return result
}