/*
    Like an inspired Beethoven who's about to write his Moonlight Sonata, you're about to compose a colorful symphony of letters with your keyboard.
        Write the function compose:

        Make it fire every time a key is pressed.
        Create a new div with the class note when a letter of the lowercase alphabet is pressed. It should have a unique background color generated using the key of the event. It should also display the corresponding pressed character.
        When Backspace is pressed, delete the last note.
        When Escape is pressed, clear all the notes.
 */

export function compose() {

    document.addEventListener('keydown', key => {
        if (key.key === 'Backspace') {
            let all = document.querySelectorAll('div')
            all[all.length - 1].remove()

        }
        else if (key.key === 'Escape') {
            let all = document.querySelectorAll('div')
            for (let i = 0; i < all.length; i++) {
                all[i].parentNode.removeChild(all[i]);
            }
        }
        else {
            let div = document.createElement('div');
            div.className = 'note'
            document.body.appendChild(div)
            div.innerHTML = key.key
            div.style.backgroundColor = `rgb(32,156,${key.keyCode})`
        }
    })
}