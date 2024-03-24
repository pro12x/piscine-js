/*
    Create the function grid which displays all the gossips, provided in the data file below, as cards on a grid (in the same order).

    They will each be represented as a div with the gossip class.

    The first gossip card must be a form. It will need a textarea, and a submit button with the text "Share gossip!". It will add new gossip to the list.

    Create 3 type="range" inputs with the class range, all wrapped in a div with the class ranges.

    id="width": that controls the width of cards from 200 to 800 pixels.
    id="fontSize": that controls the font size from 20 to 40 pixels.
    id="background": that control the background lightness from 20% to 75%.
    Use hsl for colors
 */

import { gossips } from './gossip-grid.data.js';

const firstCard = () => {
    let firstCard = document.createElement('from')
    firstCard.className = 'gossip'
    let textArea = document.createElement('textarea')
    let button = document.createElement('button')
    button.textContent = "Share gossip!"
    firstCard.appendChild(textArea)
    firstCard.appendChild(button)
    document.body.appendChild(firstCard)
    displayGossips()
    button.addEventListener('click', () => {
        document.querySelectorAll('.gossip').forEach(gossip => gossip.remove())
        gossips.unshift(textArea.value)
        document.body.appendChild(firstCard)
        displayGossips()
    })
}

export const grid = () => {
    firstCard()
    let div = document.createElement("div")
    div.className = "ranges"
    let widthControl = document.createElement('input')
    widthControl.type = 'range'
    widthControl.className = 'range'
    widthControl.value = '400'
    widthControl.id = 'width'
    widthControl.min = '200'
    widthControl.max = '800'
    widthControl.addEventListener('input', () => {
        let allCards = document.querySelectorAll('.gossip')
        allCards.forEach(card => card.style.width = widthControl.value + "px")
    })
    let fontSizeControl = document.createElement('input')
    fontSizeControl.type = 'range'
    fontSizeControl.className = 'range'
    fontSizeControl.value = '30'
    fontSizeControl.id = 'fontSize'
    fontSizeControl.min = '20'
    fontSizeControl.max = '40'
    fontSizeControl.addEventListener('input', () => {
        let allCards = document.querySelectorAll('.gossip')
        allCards.forEach(card => card.style.fontSize = fontSizeControl.value + "px")
    })
    let backgroundControl = document.createElement('input')
    backgroundControl.type = 'range'
    backgroundControl.className = 'range'
    backgroundControl.value = '50'
    backgroundControl.id = 'background'
    backgroundControl.min = '20'
    backgroundControl.max = '75'
    backgroundControl.addEventListener('input', () => {
        let allCards = document.querySelectorAll('.gossip')
        allCards.forEach(card => card.style.background = `hsl(280, 50%, ${backgroundControl.value}%`)
    })
    div.appendChild(widthControl)
    div.appendChild(fontSizeControl)
    div.appendChild(backgroundControl)
    document.body.appendChild(div)
}

const displayGossips = () => {
    return gossips.forEach(gossip => {
        let div = document.createElement("div")
        div.textContent = gossip
        div.className = "gossip"
        document.body.appendChild(div)
    })
}
