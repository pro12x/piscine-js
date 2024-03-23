/*
    Being stuck at home, bored, desperate and coming up with a lot of weird ideas, a friend asks you to develop a tool to measure his ocular skills. One of those Monoyer charts that ophthalmologists use.

        Your task is toGenerate a board where each new letter is harder, bigger, bolder and stronger.

        Write the function generateLetters which creates 120 div elements, each containing a letter randomly picked through the uppercase alphabet, and whose style properties have to be increased:

        each letter's font-size has to grow from 11 to 130 pixels.
        font-weight has to be 300 for the first third of the letters, 400 for the second third, and 600 for the last third.
 */

export function generateLetters() {
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let body = document.querySelector('body')
    let fWeight = 300;
    for (let i = 11; i < 131; i++) {
        if (i < 51) {
            fWeight = 300;
        }
        else if (i < 91) {
            fWeight = 400;
        }
        else {
            fWeight = 600;
        }
        let res = document.createElement('div');
        let char = alph.charAt(Math.random() * res.length);
        res.textContent = char;
        res.setAttribute("style", "font-size:" + i + "px; font-weight: " + fWeight + ";")
        body.appendChild(res);
    }
}