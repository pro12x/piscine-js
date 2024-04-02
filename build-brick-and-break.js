/*
    Today, your mission is to build a 3-column brick tower, maintain it and finally break it.

    Create a function build which will create and display the amount of bricks passed as argument:

    each brick has to be created as a div and added to the page at a regular interval of 100ms.
    each brick will receive a unique id property, like the following:
    <div id="brick-1"></div>
    each brick in the middle column has to be set with the custom data attribute foundation, receiving the value true.
    Each one of the two emojis in the top-right corner fires a function on click:

    🔨: triggers the function repair. Write the body of that function. It receives any number of IDs. For each id, it retrieves the HTML element, and sets the repaired custom attribute to in progress if it is a brick situated in the middle column, and true if not.
    🧨: triggers the destroy function. Write the body of that function. It removes the currentPost last brick in the tower.
 */

export const build = (num) => {
    let c = 1
    let m = 2
    let iID = setInterval(function(){
        let elem = document.createElement('div')
        elem.id = 'brick-'+c
        document.body.appendChild(elem)
        if (c === m) {
            document.getElementById(elem.id).setAttribute('data-foundation', "true");
            m += 3
        } else if (c === num) {
            clearInterval(iID)
        }
        c++
    },100)
}

export const repair = (...arr) => {
    arr.map((x)=> document.getElementById(x).hasAttribute('data-foundation') ? document.getElementById(x).setAttribute('data-repaired', "in progress") : document.getElementById(x).setAttribute('data-repaired', "true"))
}

export const destroy = () => {
    document.querySelectorAll('div')[document.querySelectorAll('div').length-1].remove()
}