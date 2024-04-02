/*
    FINALLY, you got the names. But you could forget it... loose it... How could you write it without puting the surprise in danger?!

    Create a tell-it-cypher.mjs script that:

    Takes a file as first argument
    Takes one of these keywords as second argument:
    encode: convert your file to base64, then save the result in a cypher.txt file.
    decode: convert your file from base64, then save the result in a clear.txt file.
    Could take a string as third argument and use it as the new file name. Extension must be precised.
    Notions
    Node buffer: .from()
    Node buffer: .toString()
 */

import {readFile, writeFile} from 'fs/promises'
import {argv} from 'node:process'

async function encodeFile(path, output) {
    const data = await readFile(path)
    const base64 = Buffer.from(data).toString('base64')
    await writeFile(output, base64)
}

async function decodeFile(path, output) {
    const base64 = await readFile(path, 'utf-8')
    const data = Buffer.from(base64, 'base64')
    await writeFile(output, data)
}

async function tellItCypher() {
    const [, , filePath, action, newFileName] = argv

    if (!filePath || !action) {
        return
    }

    const output = newFileName || (action === 'encode' ? 'cypher.txt' : 'clear.txt')

    try {
        switch (action) {
            case 'encode':
                await encodeFile(filePath, output)
                break
            case 'decode':
                await decodeFile(filePath, output)
                break
            default:
                console.error('Invalid action. Use "encode" or "decode".')
                return
        }
    } catch (error) {
        console.error(`Error processing file: ${error.message}`)
    }
}

await tellItCypher()
