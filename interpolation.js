/*
    Create a function named interpolation that takes an object with 5 properties: step, start, end, callback and duration.

    This function must interpolate points from the start position to the end position (not including the end position). The number of points depends on the number of steps.

    For each interpolation point, you must call the callback function with an array of the two points [x, y]:

    x: distance
    y: point
    There should be a delay between each callback invocation of duration / step, so that the final call happens after duration.

    Example
    step = 5
    start = 0
    end = 1
    duration = 10

       t
       |
    10 |_______________. <- execute callback([0.8, 10])
       |               |
       |               |
     8 |___________.   |
       |           |   |
       |           |   |
     6 |_______.   |   |
       |       |   |   |
       |       |   |   |
     4 |___.   |   |   |
       |   |   |   |   |
       |   |   |   |   |
     2 .   |   |   |   |
       |   |   |   |   |
       |___|___|___|___|___d
       0  0.2 0.4 0.6 0.8
 */

const interpolation = (obj = {}) => {
    let x = obj.start
    let y = obj.duration / obj.step
    let timer = setInterval(() => {
        obj.callback([x, y])
        x += (obj.end - obj.start) / obj.step
        y += obj.duration / obj.step
        if (Math.round(x * 100) / 100 === obj.end) clearInterval(timer)
    }, obj.duration / obj.step)
}