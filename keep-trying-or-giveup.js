/*
    Create a retry function, that takes 2 arguments:

    count: indicates maximum number of retries.
    callback: an async function that will be invoked for every attempt.
    retry returns a function that invokes the callback function. That function passes its arguments to callback, and returns the value from callback.

    The function returned by retry must catch errors from callback. After that function has caught count errors, it must throw an Error.

    if count is 3, callback will be invoked at most 4 times, the initial call plus 3 retries.

    Create function named timeout, that takes 2 arguments:

    delay: indicates maximum wait time.
    callback: an asynchronous function that will be invoked.
    timeout returns a function that invokes and returns the value from callback. The function must pass its arguments to callback. If callback does not resolve before delay, your function returns Error('timeout').
 */

const retry = (count, callback, t = 0) => (...args) => {
    return callback(...args).catch(() => {
        return (t > count) ? Promise.reject(new Error(`x:${args}`)) : retry(count, callback, t += 1)(...args)
    })
}

const timeout = (delay, callback) => (...args) => {
    return Promise.race([callback(...args), new Promise(resolve => setTimeout(resolve, delay))])
        .then((value) => { return (!value) ? Promise.reject(new Error(`timeout`)) : value})
}