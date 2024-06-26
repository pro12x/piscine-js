/*
    Your very favorite person's birthday is coming soon. So you've decided to organize a very special party 🥳🪅🎤

    Invitations have been sent for a while...

    Good news: answers are back! Psst: Sorry buddy, we didn't count it, you've been too generous. But we saved every one of them as a file in a special directory for you. Have fun!

    Create a tell-me-how-many.mjs script that:

    Take a relative or absolute directory path as argument from the command line.
    Read this directory path.
    Get the number of entries in this directory.
    Print the result in console.
    If there is no argument passed, the script must execute itself in the current directory

    Notions
    Node file system: readdir
    Provided files
    Download guests.zip to have at your disposal the guests directory containing the files to count in your script. You must save it in your tell-me-how-many exercise directory to test your script on it.
 */

import { readdir } from 'fs/promises'
import { argv } from "node:process"
import * as path from "path";

const args = argv.slice(2, 3)

const tellMeHowMany = async (directory) => {
    try {
        const files = await readdir(directory)
        console.log(files.length)
    } catch (error) {
        console.error(error)
    }
}

await tellMeHowMany(path.join(args[0]))