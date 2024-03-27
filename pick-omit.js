/*
    Create two functions which takes an object and a string or array of strings. They should return a new object which:
        pick: contains only those keys which appear in the string or array of strings.
    omit: contains only those keys which do not match the string, or do not appear in the array of strings.

    Those functions are pure and must not modify the given object
 */

/*const tab = {
    agent: {
        firstName: 'James',
        lastName: 'Bond',
        age: 25,
        email: 'jamesbond@hotmail.com',
    },
    newAgent: {firstName: 'James', lastName: 'Bond'},
    car: {brand: 'ford', motor: 'v8', year: 2000},
    newCar: {brand: 'ford', year: 2000},
    user: {firstName: 'John', lastName: 'Doe', age: 32, ageVerified: false},
    newUser: {ageVerified: false},
    computer: {brand: 'lenovo', ram: '32GB', processor: 'i7 8th Gen'},
    tools: {drill: 'bosh', grinders: 'DeWalt', saws: ' Makita'},
    newtool: {drill: 'bosh'},
    games: {board: 'monopoly', cards: 'poker', dice: 'roulette'},
    newgames: {dice: 'roulette'},
    language: {England: 'english', Spain: 'spanish', Portugal: 'portuguese'},
    newlanguage: {England: 'english', Portugal: 'portuguese'},
    phone: {samsung: 'galaxy', asus: 'zenphone', nokia: 'lumia'}
}*/


const pick = (obj = {}, keys) => {
    Object.setPrototypeOf(obj,null)
    keys = (typeof keys ==='string') ? [keys] : keys
    console.log(keys)
    const result = {}
    Object.keys(obj).forEach(key => keys.forEach(value => { (key === value) ? result[key] = obj[key] : null }))
    return result
}

const omit = (obj = {}, keys) => {
    keys = (typeof keys ==='string') ? [keys] : keys
    const result = {...obj}
    keys.forEach(key => { delete result[key] })
    return result
}

//console.log(pick(tab.agent, ['firstName', 'lastName'])) // { firstName: 'James', lastName: 'Bond' }
//console.log(pick(tab.car, ['brand', 'year'])) // { brand: 'ford', year: 2000 }
//console.log(pick(tab.user, 'ageVerified')) // { ageVerified: false }
//console.log(pick(tab.computer, 'graphic'))
//console.log(omit(tab.tools, ['grinders', 'saws']))
//console.log(omit(tab.games, ['board', 'cards']))
//console.log(omit(tab.language, 'Spain'))
//console.log(omit(tab.phone, 'iphone'))
//console.log(pick({ something: 5, __proto__: { d: 6 } }, ['proto', 'something']))
//console.log(omit({ something: 5, __proto__: { d: 6 } }, 'something'))