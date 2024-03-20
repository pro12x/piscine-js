/*
    Create a function named matchCron, which accepts a valid cron string, and a valid Date. Your function should return true if the pattern matches the Date.
        You only need to implement numbers and *. Other complex patterns are not required.

    Only valid patterns will be tested.

    Example
        matchCron('9 * * * *', new Date('2020-05-30 18:09:00')) // -> true
        matchCron('9 * * * *', new Date('2020-05-30 19:09:00')) // -> true
        matchCron('9 * * * *', new Date('2020-05-30 19:21:00')) // -> false
        //         | | | | |
        //         | | | | +- Day of the Week   (range: 1-7, 1 is Monday)
        //         | | | +--- Month of the Year (range: 1-12)
        //         | | +----- Day of the Month  (range: 1-31)
        //         | +------- Hour              (range: 0-23)
        //         +--------- Minute            (range: 0-59)
*/

const isValidValue = (val, pattern, start, end) => {
    if (pattern === '*') { return true }
    if (!(pattern >= start && pattern <= end)) { return false }

    return val == pattern
}

const matchCron = (pattern, date) => {
    return (isValidValue(date.getMinutes(), pattern.split(' ')[0], 1, 59) && isValidValue(date.getHours(), pattern.split(' ')[1], 1, 59) && isValidValue(date.getDate(), pattern.split(' ')[2], 1, 31) && isValidValue(date.getMonth() + 1, pattern.split(' ')[3], 1, 12) && isValidValue(date.getDay(), pattern.split(' ')[4], 1, 7))
}