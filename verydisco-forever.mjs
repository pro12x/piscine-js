/*
    Create a verydisco-forever.mjs script that does exactly the same as you verydisco script, but writes the result in a verydisco-forever.txt file instead of printing it in the console.
 */

import fs from 'fs/promises'
import { argv } from "node:process"
import * as path from "path";
let argsArray = argv.slice(2, 3)
let splitArgs = argsArray[0].split(" ")

const verydiscoForever = async (splitArgs) => {
    let result = ''
    splitArgs.forEach(word => {
        const start = Math.ceil(word.length / 2)
        const firstHalf = word.slice(0, start);
        const secondHalf = word.slice(start);
        if (splitArgs.length === 1) {
            result += secondHalf + firstHalf;
        }else{
            result += secondHalf + firstHalf + ' ';
        }
    })
    console.log(result)
    await fs.writeFile(path.join('./', 'verydisco-forever.txt'), result.trim())
}

console.log(await verydiscoForever(splitArgs))
