/*
    Create a function named dayOfTheYear which accepts a Date. Your function should return the number of days since the first day of that year.
 */

const dayOfTheYear = (date = new Date()) => {
    return Math.round((Date.parse(date.toString()) - Date.parse(date.getUTCFullYear()))/(1000*3600*24))+1
}