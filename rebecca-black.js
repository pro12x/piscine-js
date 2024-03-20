/*
    Create the following functions which accept a Date:
        isFriday: returns true if the Date is a Friday.
        isWeekend: returns true if the Date is a weekend day.
        isLeapYear: returns true if the year of the Date is a leap year.
        isLastDayOfMonth: returns true if the Date represents the last day of the month.
 */

const isFriday = (date) => {
    return (date.getDay() === 5)
}

const isWeekend = (date) => {
    return (date.getDay() === 0 || date.getDay() === 6)
}

const isLeapYear = (date) => {
    return (date.getFullYear() % 4 === 0 && date.getFullYear() % 100!== 0) || date.getFullYear() % 400 === 0
}

const isLastDayOfMonth = (date) => {
    return (date.getDate() === (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate())
}