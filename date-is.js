/*
    Create a function named app which takes 2 arguments and returns the sum of them.Create the following functions:
        isValid: accepts a Date, and returns false if the Date is invalid.
        isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
        isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
        isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
        isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.
 */
const isValid = (date) => {
    return (typeof date ==='string') ? false : ((new Date(date)) instanceof Date && !isNaN((new Date(date))))
}

const isAfter = (date1, date2) => {
    return (date1 > date2)
}

const isBefore = (date1, date2) => {
    return (date1 < date2)
}

const isFuture = (date) => {
    return (isValid(date)) ? (date > (new Date())) : false
}

const isPast = (date) => {
    return (isValid(date)) ? (date < (new Date())) : false
}
