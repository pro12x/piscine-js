/*
    Where will you go on your next holiday?

        Let's make a page to index your options, so that next time you ask yourself that question, you'll be ready with some ideas.

        Create a function named explore, which creates a page displaying the list of places provided in the data file below.

        Sort the places from north to south, so that the northern-most place is first.
        Display a fullscreen-size <section> for each place. Use the pics hosted in the ./where-do-we-go_images folder below. Set the background attribute with the corresponding image URL. The URL has to be formatted like so: ./where-do-we-go_images/name-of-the-place.jpg.
        Display a location indicator as an <a> tag in the middle of the screen. It should:
        have the class location
        display the name and coordinates of the currentPost place, as text strings separated by \n
        set the text color as color
        update the name, coordinates and color on scroll, at the point when the next image reaches the middle of the screen height
        make the href attribute open a new tab redirecting to a Google Maps URL with the coordinates of the place currently displayed
        Display a compass as a div tag, indicating the latitude direction which:
        has the class direction
        displays N for North if the user is scrolling up
        displays S for South if he's scrolling down
 */

import { places } from './where-do-we-go.data.js'

export function explore() {
    let sortedPlaces = sort(places)
    document.body.style.overflowX = 'hidden';

    createSections(sortedPlaces)
    createDirection()

    let sections = document.querySelectorAll('section');
    let direction = document.querySelector('.direction')

    const makeTag = (i) => {
        const tag = document.createElement('a');
        tag.className = 'location';
        tag.style.color = sortedPlaces[i].color;
        tag.textContent = `${sortedPlaces[i].name}\n${sortedPlaces[i].coordinates}`;
        tag.setAttribute('href', `https://google.com/maps/place/${sortedPlaces[i].coordinates}`);
        tag.setAttribute('target', '_blank');
        sections[i].append(tag);
    }

    let prev = scrollY;
    let prevIndex = Math.round(scrollY / window.innerHeight);
    makeTag(prevIndex);

    document.addEventListener('scroll', (e) => {
        const index = Math.round(scrollY / window.innerHeight);
        if (prevIndex != index) {
            sections[prevIndex].childNodes[0].remove();
            console.log(sections[index].childNodes, prevIndex, index)
            makeTag(index);
        }
        prevIndex = index;

        if (prev > scrollY) direction.textContent = 'N';
        else if (prev < scrollY) direction.textContent = 'S';
        prev = scrollY;
    });
}

function sort(arr) {
    let array = [...arr]
    array.sort((a, b) => {
        if (getNorth(a) > getNorth(b)) {
            return -1
        }
        if (getNorth(a) < getNorth(b)) {
            return 1
        }
        return 0
    })
    return array
}

function getNorth(obj) {
    let north = obj.coordinates.split(' ')[0].replace(/[°'."]/g, '')
    if (north.includes('N')) {
        north = Number(north.slice(0, 5))
    } else {
        north = Number(north.slice(0, 5)) * -1
    }
    return north
}

function createSections(sortedPlaces) {
    sortedPlaces.forEach((place) => {
        let section = document.createElement('section');
        section.style.background = `url(./where-do-we-go_images/${place.name.toLowerCase().split(',')[0].replace(/ /g, '-')}.jpg)`;
        section.style.backgroundRepeat = 'no-repeat';
        section.style.backgroundSize = 'cover';
        section.style.backgroundPosition = 'center';
        document.body.append(section);
    });
}

function createDirection() {
    let direction = document.createElement('div')
    direction.className = 'direction';
    direction.textContent = 'N';
    document.body.append(direction);
}