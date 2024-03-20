/*
Let's eliminate Sundays by taking them out of the calendar, making a week only six days long, from "Monday" to "Saturday".
Create a function called sunnySunday that takes a Date as an argument and returns the weekday as a string.
    01/01/0001 is a Monday.
 */

const sunnySunday = (date) => {
    const week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    return week[Math.abs((date.getTime() - new Date('0001-01-01'))/(1000 * 3600 * 24)) % week.length]
}