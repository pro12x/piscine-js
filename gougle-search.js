/*
    Create a function named queryServers that takes 2 arguments:

        serverName: a string of the name of the server.
        q: a string of the query given by the user.
    You need to construct 2 urls which should work like this:

    queryServers('pouet', 'hello+world')
    // return the fastest of those 2 calls:
    // -> getJSON('/pouet?q=hello+world')
    // -> getJSON('/pouet_backup?q=hello+world')
    Create a function named: gougleSearch that takes a single query argument (q). It must invoke queryServers concurrently on 3 servers:
        "web"
        "image"
        "video"

    You must return the value from each server in an object using the server name as key.

    A timeout of 80milliseconds must be set for the whole operation, if it is not complete within 80 milliseconds, then you must return Error('timeout').

    Code provided
    The provided code will be added to your solution, and does not need to be submitted.

    // fake `getJSON` function
    let getJSON = async (url) => url
 */

async function queryServers(serverName, q) {
    const uri1 = `/${serverName}?q=${encodeURI(q)}`
    const uri2 = `/${serverName}_backup?q=${encodeURI(q)}`
    return await Promise.race([getJSON(uri1), getJSON(uri2)])
}

async function gougleSearch(q) {
    return {
        web: await Promise.race([queryServers('web', q), (new Promise((resolve, reject) => setTimeout(reject, 80, new Error('timeout'))))]),
        image: await Promise.race([queryServers('image', q), (new Promise((resolve, reject) => setTimeout(reject, 80, new Error('timeout'))))]),
        video: await Promise.race([queryServers('video', q), (new Promise((resolve, reject) => setTimeout(reject, 80, new Error('timeout'))))]),
    }
}