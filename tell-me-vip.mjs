/*
    Create a tell-me-vip.mjs script that filters the guests who actually answered 'YES' to your invitation, and save this list in a vip.txt file.

The output must print one guest per line, in ascending alphabetic order, and formated as following: Number. Lastname Firstname (starting from 1).
 */

import {readdir, readFile, writeFile} from 'fs/promises'
import { join } from 'path'
import { argv } from 'node:process'

const args = argv.slice(2, 3)
const fileName = 'vip.txt'

async function tellMeVip(directory) {
    try {
        const files = await readdir(directory)
        let tab = []

        for (const file of files) {
            const content = await readFile(join(directory, file), 'utf8')
            const guest = JSON.parse(content)

            if (guest.answer.toLowerCase() === 'yes') {
                const last = file.split('_')[0]
                const first = file.split('_')[1].split('.')[0]
                tab.push({ first, last })
            }
        }

        tab.sort((a, b) => a.first.localeCompare(b.first) || a.first.localeCompare(b.first))

        const result = tab.map((guest, index) => `${index + 1}. ${guest.first} ${guest.last}`).join("\n")

        await writeFile(fileName, result)
    } catch (error) {
        console.error(error)
    }
}

await tellMeVip(args[0])