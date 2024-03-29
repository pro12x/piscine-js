/*
    Create two functions that will work like _.debounce from lodash.
        debounce: don't worry about the options.
        opDebounce: implement the leading options.
 */

const debounce = (func, wait, immediate) => {
    let timeout
    return function () {
        let context = this, args = arguments
        let later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        let callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

const opDebounce = (func, wait, immediate) => {
    return debounce(func, wait, immediate)
}