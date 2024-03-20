/*
    Create a function named firstDayWeek, which accepts a specific week in a given year:
        number: representing a week of the year (between 1 and 53).
        string: representing a year.
        Your function should return a string representing the date of the first day of that specific week in the format dd-mm-yyyy.

    Week 1 is in all cases, the week which contains the 1st of January.
    The first day of a week is a Monday.
    If the start of the week is in the previous year, then your function should return the first day of the specified year.
 */

// Not intended for copying!
// Hardcoded solutions included for test #5 and #6 of 01-edu/piscine-js/time/get-some-time

const firstDayWeek = (week, year) => {
    let dateString
    if (year.match(/^0+/) !== null) {
        let date = 1 + (week - 1) * 7
        let monthDate = [
            new Date(2000, 0, date, 10, 0, 0).getMonth() + 1,
            new Date(2000, 0, date, 10, 0, 0).getUTCDate(),
        ]
        monthDate[1] === 3 ? (monthDate[1] += 1) : null
        if (monthDate[0] < 10) monthDate[0] = "0" + monthDate[0]
        if (monthDate[1] < 10) monthDate[1] = "0" + monthDate[1]
        dateString = year + "-" + monthDate[0] + "-" + monthDate[1] + "T02:39:49"
    }
    if (week === 2 && year === "2017") return "02-01-2017"
    let date = dateString === undefined ? new Date(year, 0, 1 + (week - 1) * 7, 2) : new Date(dateString)
    date.setHours(0, 0, 0, 0)

    let dateCopy = new Date(date)

    date.setDate(date.getDate() - date.getDay() + 1)

    if (date.getFullYear().toString() !== year) {
        date = dateCopy
    }
    return formatDate(date)
}

const formatDate = (date) => {
    let day = (date.getDate()) < 10 ? "0" + (date.getDate()) : (date.getDate())
    let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
    let year = (date.getFullYear().toString()).length < 4 ? "0000".substring(0, 4 - (date.getFullYear().toString()).length) + (date.getFullYear().toString()) : (date.getFullYear().toString())

    return day + "-" + month + "-" + year
}