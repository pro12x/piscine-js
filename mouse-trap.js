/*
    Develop a trap to capture the elements when the mouse is getting too close to the center of the page.

        Create the following functions:

        createCircle: make it fire on every click on the page, and create a div at the position of the mouse on the screen, setting its background to white and its class to circle.

        moveCircle: make it fire when the mouse moves, and get the last circle created and makes it move along with the mouse.

        setBox: which creates a box with the class box in the center of the page. When a circle is entirely inside that box, it has to be purple (use the CSS global variable var(--purple) as its background). Once a circle enters the box, it is trapped inside and cannot escape.

        Hint: Be careful, a circle cannot overlap the box which has walls of 1px. It has to be trapped strictly inside.
 */

export const createCircle = () => {
    document.addEventListener('click', (event)=>{
        let el = document.createElement('div')
        el.className = 'circle'
        el.style.background = 'white'
        el.style.top = event.clientY-25+'px'
        el.style.left = event.clientX-25+'px'
        document.body.appendChild(el)
    },false)
}

export const moveCircle = () => {
    document.addEventListener('mousemove', (event)=>{
        let el = document.body.lastChild
        if (el == null) {
            return
        }
        el.style.top = event.clientY-25+'px'
        el.style.left = event.clientX-25+'px'
    },false)
}

export const setBox = () => {
    let el = document.createElement('div')
    el.className = 'box'
    document.body.appendChild(el)
}