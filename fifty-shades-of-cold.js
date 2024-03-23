/*
    You've been asked to freshen up a webpage, by displaying shades of cold colors.

        Check the colors array provided in the data file below.

        Write the generateClasses function. It creates a <style> tag inside the <head>. It should generate one class for each color in the colors array, which sets the background attribute like so:

        .blue {
          background: blue;
        }
        Write the generateColdShades function which creates a <div> for each color of the colors array, whose name contains aqua, blue, turquoise, green, cyan, navy or purple. Each <div> must have the corresponding generated class and display the name of the color, like following:

        <div class="blue">blue</div>
        The function choseShade is triggered when clicking on a div. Write the body of this function. It accepts the shade of the clicked element as an argument, and replaces all the classes of all the other elements by the chosen shade.
 */

import { colors } from './fifty-shades-of-cold.data.js'
export function generateClasses() {
    let coul = document.createElement('style');
    colors.forEach(color => {
        coul.innerHTML += `.${color} {background: ${color};}`

    });
    document.head.appendChild(coul);
}

export function generateColdShades() {
    colors.forEach(color => {
        if ((/(aqua|blue|turquoise|green|cyan|navy|purple)/).test(color)) {
            let box = document.createElement('div')
            box.classList.add(color)
            box.textContent = color
            document.body.appendChild(box)
        }
    });
}

export function choseShade(shade) {
    let boxs = Array.from(document.getElementsByTagName('div'))
    boxs.forEach(box => {
        box.classList.remove(box.classList[box.classList.length - 1])
        box.classList.add(shade)
    })
}