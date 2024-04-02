/*
    Create a verydisco-reverso.mjs script that:
        takes the name of a file (with the extension) as a first argument
        reads this file
        deciphers the content of this file by reversing it from the very disco mode
        prints the result in the console

    For example:
        Reading the verydisco content of your verydisco.txt file would print discovery in console.
 */

import { readFile } from 'fs/promises'
import { argv } from "node:process"
let args = argv.slice(2, 3)

//console.log(args)

const verydiscoReverso = async (fileName) => {
    const content = await readFile(fileName, 'utf8')
    //console.log(content)
    let result = ''
    content.split(' ').forEach(word => {
        const start = Math.ceil(word.length / 2)
        const first = word.slice(0, start)
        const second = word.slice(start)
        result += second + first + ' '
        //console.log(word, start, first, second, result.trim())
    })
    console.log(result)
}

console.log(await verydiscoReverso(args[0]))