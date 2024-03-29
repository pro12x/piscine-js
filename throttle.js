/*
    Create two functions that will work like _.throttle from lodash.
        throttle: don't worry about the options.
        opThrottle: implement the trailing and leading options.
 */

const throttle = (f, delay) => {
    let lastTime = 0
    return function () {
        if ((new Date()) - lastTime > delay) {
            f.apply(this, arguments)
            lastTime = new Date()
        }
    }
}

const opThrottle = (f, delay, obj = {}) => {
    let lastTime = 0
    let timer = null
    return function () {
        if (!lastTime && !obj.leading) {
            lastTime = new Date()
        }
        if ((new Date()) - lastTime > delay) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            f.apply(this, arguments)
            lastTime = new Date()
        } else {
            if (!timer && obj.trailing !== false) {
                timer = setTimeout(() => {
                    f.apply(this, arguments)
                    lastTime = new Date()
                    timer = null
                }, delay)
            }
        }
    }
}