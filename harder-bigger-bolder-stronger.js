/*
    Being stuck at home, bored, desperate and coming up with a lot of weird ideas, a friend asks you to develop a tool to measure his ocular skills. One of those Monoyer charts that ophthalmologists use.

        Your task is toGenerate a board where each new letter is harder, bigger, bolder and stronger.

        Write the function generateLetters which creates 120 div elements, each containing a letter randomly picked through the uppercase alphabet, and whose style properties have to be increased:

        each letter's font-size has to grow from 11 to 130 pixels.
        font-weight has to be 300 for the first third of the letters, 400 for the second third, and 600 for the last third.
 */

export const generateLetters = () => {
    let weight = 300
    for (let i = 11; i < 131; i++) {
        let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(Math.floor(Math.random() *26))
        let elem = document.createElement('div')
        elem.textContent = char
        elem.style.fontSize = i+'px'
        elem.style.fontWeight = weight
        document.body.appendChild(elem);
        if (i === 51) {
            weight += 100
        } else if (i === 91) {
            weight += 200
        }
    }
}