/*
    Create a function named countLeapYears which accepts a Date. Your function should return the number of leap years to have taken place since the year 1.
 */

const isLeapYear = (year = 0) => {
    return (year % 4 === 0 && year % 100!== 0) || year % 400 === 0
}

const countLeapYears = (date) => {
    let result = 0;
    for (let i = 1; i < date.getFullYear(); i++) {
        result = (isLeapYear(i)) ? result + 1 : result;
    }
    return result;
}

console.log(countLeapYears(new Date('1664-08-09')))