/*
    Someone once said that a human year is equal to 7 dog years.
    Create a function named dogYears, that accepts the name of a planet, and the age of the dog in seconds. Your function should return the age of the dog on that planet in dog years.

        earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds.
        mercury: orbital period 0.2408467 Earth years.
        venus: orbital period 0.61519726 Earth years.
        mars: orbital period 1.8808158 Earth years.
        jupiter: orbital period 11.862615 Earth years.
        saturn: orbital period 29.447498 Earth years.
        uranus: orbital period 84.016846 Earth years.
        neptune: orbital period 164.79132 Earth years.

    If you were told that a dog was 1,000,000,000 seconds old, you should calculate that the dog would be 221.82 Earth-years old.
    You will have to format the number so that the result is rounded like the example above.
*/

function dogYears(planet = "earth", age = 0) {
    var years;
    const earthSecond = 31557600
    const mercurySecond = earthSecond * 0.2408467
    const venusSecond = earthSecond * 0.61519726
    const marsSecond = earthSecond * 1.8808158
    const jupiterSecond = earthSecond * 11.862615
    const saturnSecond = earthSecond * 29.447498
    const uranusSecond = earthSecond * 84.016846
    const neptuneSecond = earthSecond * 164.79132

    switch (planet.toLowerCase())
    {
        case "earth":
        {
            years = age / earthSecond
            break
        }
        case "mercury":
        {
            years = age / mercurySecond
            break
        }
        case "venus":
        {
            years = age / venusSecond
            break
        }
        case "mars":
        {
            years = age / marsSecond
            break
        }
        case "jupiter":
        {
            years = age / jupiterSecond
            break
        }
        case "saturn":
        {
            years = age / saturnSecond
            break
        }
        case "uranus":
        {
            years = age / uranusSecond
            break
        }
        case "neptune":
        {
            years = age / neptuneSecond
            break
        }
        default:
        {
            years = 0;
        }
    }
    return parseFloat((years * 7).toFixed(2))
}

//console.log(dogYears("earth", 1000000000))