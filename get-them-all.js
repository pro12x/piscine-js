/*
    You've been attributed the task to find the main architect of the Tower of Pisa before he achieves his plans, avoiding us nowadays all those lame pictures of people pretending to stop it from falling.

    You arrive at the architects' chamber to find him, but all you have in front of you is a bunch of unknown people. Step by step, with the little information you have, gather information and figure out by elimination who he is.

    Launch the provided HTML file in the browser to begin your investigation.
    On top of the webpage, each of the four buttons fires a function:

        Write the body of the getArchitects function, which returns an array containing 2 arrays of HTML elements:
            the first array contains the architects, all corresponding to a <a> tag
            the second array contains all the non-architects people

        Write the body of the getClassical function, which returns an array containing 2 arrays of HTML elements:
            the first array contains the architects belonging to the classical class
            the second array contains the non-classical architects

        Write the body of the getActive function, which returns an array containing 2 arrays of HTML elements:
            the first array contains the classical architects who are active in their class
            the second array contains the non-active classical architects

        Write the body of the getBonannoPisano function, which returns an array containing:
            the HTML element of the architect you're looking for, whose id is BonannoPisano
            an array which contains all the remaining HTML elements of active classical architects

    From now on, don't forget to export all the expected functions, so that they can be imported to be tested
    > export const getArchitects = () => {...}

    Notions
        HTML Element
        getElementsByTagName()
        getElementsByClassName()
        getElementById()
        querySelectorAll() / querySelector()
        ...and bit of CSS that could help with the :not pseudo class
 */

export const getArchitects = () => {
    const architects = document.getElementsByTagName('a')
    const nonArchitects = document.getElementsByTagName('span')
    return [Array.from(architects)].concat([Array.from(nonArchitects)])
}

export const getClassical = () => {
    const classical = document.querySelectorAll('a.classical')
    const nonClassical = document.querySelectorAll('a:not(.classical)')
    return [Array.from(classical)].concat([Array.from(nonClassical)])
}

export const getActive = () => {
    const active = document.getElementsByClassName('classical active')
    const nonActive = document.querySelectorAll('.classical:not(.active)')
    return [Array.from(active)].concat([Array.from(nonActive)])
}

export const getBonannoPisano = () => {
    const bonannoPisano = document.querySelectorAll('#BonannoPisano')
    const noBonannoPisano = document.querySelectorAll('a.classical.active:not(#BonannoPisano)')
    return Array.from(bonannoPisano).concat([Array.from(noBonannoPisano)])
}