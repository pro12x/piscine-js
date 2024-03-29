/*
    In this exercise, we will focus on building complex async flows with promises.

    Create a function named getJSON with two parameters:
        path: a URL called by your function.
        params: optional query parameters that will be appended to the path.

    getJSON must construct a valid url with the path and stringified params, and use fetch to fulfil the request.

    If the response is not OK, getJSON must throw an error using the response status text.
    The response body must then be read and parsed from JSON.
    The parsed object contains one of those 2 properties:
        "data": the actual data to return.
        "error": the error message to throw.
 */

async function getJSON(path = '', params = {}) {
    const url = path + '?' + Object.keys(params).map((key) => { return key.replace(' ', '+') + '=' + params[key].toString().replace(' ', '+') }).join('&')
    const result = await fetch(url).then((response) => { return (response.ok) ? response.json() : Promise.reject(new Error(response.statusText)) })
    return (result.error) ? Promise.reject(new Error(result.error)) : result.data
}