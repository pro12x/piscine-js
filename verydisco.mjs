import { argv } from "node:process";
let argsArray = argv.slice(2, 3);
let splitArgs = argsArray[0].split(" ");

const verydisco = (splitArgs) => {
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
    return result
}
console.log(verydisco(splitArgs))