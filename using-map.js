/*
    citiesOnly: accepts an array of objects and returns an array of strings from the city key.
        citiesOnly([
          {
            city: 'Los Angeles',
            temperature: '  101 °F   ',
          },
          {
            city: 'San Francisco',
            temperature: ' 84 ° F   ',
          },
        ]) // -> ['Los Angeles', 'San Francisco']

    Upper Casing States
        upperCasingStates: accepts an array of strings, and returns a new array of strings. The returned array will be the same as the argument, except the first letter of every word must be capitalized.
        upperCasingStates(['alabama', 'new jersey']) // -> ['Alabama', 'New Jersey']

    Fahrenheit to Celsius
        fahrenheitToCelsius: accepts an array of fahrenheit temperatures as strings, and returns an array of strings converted to celsius. Round down the result.
        fahrenheitToCelsius(['68°F', '59°F', '25°F']) // -> ['20°C', '15°C', '-4°C']

    Trim Temp
        trimTemp: accepts an array of objects, and returns a new array of objects with the same structure. The temperature strings must have their spaces removed in the new array.

        trimTemp([
          { city: 'Los Angeles', temperature: '  101 °F   ' },
          { city: 'San Francisco', temperature: ' 84 ° F   ' },
        ]) -> [
          { city: 'Los Angeles', temperature: '101°F' },
          { city: 'San Francisco', temperature: '84°F' },
        ]

    Temp Forecasts
        tempForecasts: accepts an array of objects, and returns an array of formatted strings. See the example below:

        tempForecasts([
          {
            city: 'Pasadena',
            temperature: ' 101 °F',
            state: 'california',
            region: 'West',
          },
        ]) // -> ['38°Celsius in Pasadena, California']
*/

const citiesOnly = (arr = [{}]) => {
    return arr.map(word => word.city)
}

const upperCasingStates = (arr = ['']) => {
    return arr.map(value => (value.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())).join(' '))
}

const fahrenheitToCelsius = (arr = ['']) => {
    return arr.map(value => (!isNaN(parseInt(value))) ? Math.floor((parseInt(value) - 32) * (5/9)) + '°C' : 0 + '°C')
}

const trimTemp = (arr = [{}]) => {
    return arr.map(value => ({...value, temperature: value.temperature.replace(/\s/g, '')}))
}

const tempForecasts = (arr = [{}]) => {
    return arr.map(value => `${Math.floor((parseInt(value.temperature) - 32) * (5/9)) + '°Celsius'} in ${(value.city.split(' ').map(val => val[0].toUpperCase() + val.slice(1).toLowerCase())).join(' ')}, ${(value.state.split(' ').map(val => val[0].toUpperCase() + val.slice(1).toLowerCase())).join(' ')}`)
}

//Math.floor((parseInt(value) - 32) * (5/9)) + '°C'


console.log(tempForecasts([
    {
        city: 'Pasadena',
        temperature: ' 101 °F',
        state: 'california',
        region: 'West',
    },
]))