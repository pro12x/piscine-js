/*
    Create a function named ionOut, that receives a string and returns an array with every word containing 'ion' following a 't'. The words should be returned without the 'ion' part.
*/

const ionOut = (str) => {
    if (typeof str === 'string') {
        //console.log('here')
        let regex = /\w*tion\w*/g
        return (str.match(regex)) ? (str.match(regex).map(occurence => occurence.replace('ion', ''))) : []
    }
    return []
}

//console.log(ionOut('attention, direction'))
//console.log(ionOut('promotion, provision'))
//console.log(ionOut('transfusion'))
//console.log(ionOut(' 1st position is the vision of the 2nd position'))