/*
    Today, you're going to create your own color picker.

    Write the function pick which turns the screen into a hsl color picker. It will vary the hue and luminosity according to the position of the mouse.

    The background color of the body will change based on the position of the mouse on the screen.

    The X axis will vary the hue value between 0 and 360.
    The Y axis will vary the luminosity value between 0 and 100.
    You'll need to display these three values:

    The full hsl value in a div, which has the class hsl in the middle of the screen.
    The hue value in a div with the class hue and text in the top right corner of the screen.
    The luminosity value will be displayed in the bottom left corner of the screen, in a div with the class luminosity and text.
    When the mouse is clicked, the value of the hsl will need to be copied to the clipboard.

    Two SVG lines with IDs axisX and axisY will need to follow the cursor, like really long cross hairs.

    the axisX attributes x1 and x2 need to be set to the X position of the cursor.
    the axisY attributes y1 and y2 need to be set to the Y position of the cursor.
    The formatting of a hsl value: hsl(45, 50%, 35%).

    Use Math.round() to round the values.


 */
// Asynchrous function to copy the hsl value
async function HSLCopy() {
    // Error management with try-catch block
    try {
        // Wait for the clipboard to be copied
        await navigator.clipboard.writeText(hslDiv.innerHTML);
    } catch (err) {
        console.error("Oh snap !: ", err);
    }
}

document.addEventListener('mousemove', (event) => { pick(event) })

document.addEventListener("click", (event) => { pick(event); HSLCopy() })

// Creating the new item in the DOM
const hslDiv = document.createElement("div")
// Adding the css class to the created div
hslDiv.classList.add("hsl")
// Adding the created div to the body of the document
document.body.appendChild(hslDiv)

// Creating the new item in the DOM
const hueDiv = document.createElement("div")
// Adding the css class 'hue' and 'text' to the created div
hueDiv.classList.add("hue", "text")
// Adding the created div to the body of the document
document.body.appendChild(hueDiv)

// Creating the new item in the DOM
const luminosityDiv = document.createElement("div")
// Adding the css class 'luminosity' and 'text' to the created div
luminosityDiv.classList.add("luminosity", "text")
// Adding the created div to the body of the document
document.body.appendChild(luminosityDiv)

// Defines the namespaces URI
const svgns = "http://www.w3.org/2000/svg"
// Cretating the new item in the DOM
const svg = document.createElement("svg")
// Allocate the ID to the svg
svg.id = "svg"
// Defines the size
svg.setAttribute("width", "100%")
svg.setAttribute("height", "100%")
svg.setAttribute("viewBox", "0 0 100% 100%")
svg.setAttribute("preserveAspectRatio", "none")

// Creating the new item using the svg namespace
const axisX = document.createElementNS(svgns, "line")
// Allocate the ID to the line
axisX.id = "axisX";
// Defines the start and end coordinates
axisX.setAttribute("x1", "0")
axisX.setAttribute("y1", "0")
axisX.setAttribute("x2", "0")
axisX.setAttribute("y2", "100%")
// Defines the color of the line
axisX.setAttribute("stroke", "red")
// Defines the weight of the line
axisX.setAttribute("stroke-width", "3")
// Adds the created line to the svg
svg.appendChild(axisX)

// Creating the new item using the svg namespace
const axisY = document.createElementNS(svgns, "line")
// Allocate the ID to the line
axisY.id = "axisY"
// Defines the start and end coordinates
axisY.setAttribute("x1", "0")
axisY.setAttribute("y1", "0")
axisY.setAttribute("x2", "100%")
axisY.setAttribute("y2", "0")
// Defines the color of the line
axisY.setAttribute("stroke", "red")
// Defines the weight of the line
axisY.setAttribute("stroke-width", "3")
// Adds the created line to the svg
svg.appendChild(axisY)

// Adding the created svg to the body of the document
document.body.appendChild(svg);

// Defines the pick function
export const pick = (event) => {
    // Checks if the event is undefined
    if (event === undefined) return
    // Calculates the position of the mouse from left
    const mouseX = event.clientX
    // Calculates the position of the mouse from top
    const mouseY = event.clientY
    // Calculates the 'hue' based on the horizontal position of the mouse
    const hue = Math.round((mouseX / window.innerWidth) * 360)
    // Calculates the 'luminosity' based on the vertical position of the mouse
    const luminosity = Math.round((mouseY / window.innerHeight) * 100)
    // Creates the hsl string
    const hsl = `hsl(${hue}, 100%, ${luminosity}%)`
    // Updates the background color of the body
    document.body.style.background = hsl
    hslDiv.innerHTML = hsl
    hueDiv.innerHTML = `${hue}`
    luminosityDiv.innerHTML = `${luminosity}`
    drawLines(mouseX, mouseY)
}

function drawLines(x, y) {
    // Updates the position of the axisX and axisY
    axisX.setAttribute("x1", x);
    axisX.setAttribute("x2", x);
    axisY.setAttribute("y1", y);
    axisY.setAttribute("y2", y);
}

