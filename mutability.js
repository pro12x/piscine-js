/*
    Create three copies of the person object named clone1, clone2 and samePerson.
    Increase the age of person by one, and set its country to 'FR'.
    You must find a way to keep the original values of clone1 and clone2. The values of samePerson should change when person is changed.
*/

/*const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
}*/

/*
    Pour cloner un objet, il existe trois façon de le faire.
    1. {...ObjectName}
    2. Objec.assign({}, ObjectName)
    3. JSON.stringify ...
 */

// Create three copies of the person object named clone1, clone2 and samePerson.
const clone1 = {...person}
const clone2 = Object.assign({}, person)
const samePerson = person

person.age++
person.country = 'FR'

//console.log("Person: ", person, "\nClone 1: ", clone1, "\nClone 2: ", clone2, "\nSame Person: ", samePerson)
