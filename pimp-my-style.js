/*
    Create a function named app which takes 2 arguments and returns the sum of them.Check out that button on the HTML page:

        <button class="button">pimp my style</div>
        For now, it's only a lonely, basic and sad element. let's pimp it up.

        On each click on the page, a function pimp is triggered. Write the body of that function so that the button's class is altered:

        From the data file provided, add each of the styles array elements as classes, in order.
        When the end of the array is reached, remove the classes in a LIFO fashion.
        While removing classes, toggle the unpimp class on. And toggle it off again while adding classes.
        Example for a styles array with only 3 classes:

        ["one", "two", "three"]
        Page load --> <button class="button"></button>

        ...adding
        Click 1 --> <button class="button one"></button>
        Click 2 --> <button class="button one two"></button>

        ...toggling `unpimp`
        Click 3 --> <button class="button one two three unpimp"></button>

        ...and removing backwards
        Click 4 --> <button class="button one two unpimp"></button>
        Click 5 --> <button class="button one unpimp"></button>
        Click 6 --> <button class="button"></button>
 */

import {styles} from './pimp-my-style.data.js'

let click = 0

export function pimp() {
    let button = document.querySelector('button')
    if (button.classList.contains('unpimp')) {
        click--
        if (click === 0) {
            button.classList.remove(styles[click], 'unpimp')
        } else {
            button.classList.remove(styles[click])
        }
    } else {
        if (click === 14) {
            button.classList.add(styles[click], 'unpimp')
        } else {
            button.classList.add(styles[click])
        }
        click++
    }
}