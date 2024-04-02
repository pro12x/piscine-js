/*
    Create a tell-me-who.mjs script that takes your directory path as an argument and print the names of all the guests in the console.

    The output must print one guest per line, in ascending alphabetic order, and formated as following: Number. Lastname Firstname (starting from 1).
 */


import { readdir } from 'fs/promises'
import { argv } from "node:process"
import * as path from "path";

const args = argv.slice(2, 3)

const tellMeWho = async (directory) => {
    try {
        const files = await readdir(directory)
        const tab = []
        let result = []
        files.forEach((file) => {
            const word = file.split('.')[0].split('_')
            tab.push([word[1], word[0]].join(' '))
        })
        result = tab.sort((a, b) => a.localeCompare(b))
        result.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`)
        })
    } catch (error) {
        console.error(error)
    }
}

await tellMeWho(path.join(args[0]))