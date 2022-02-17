const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
let characterNames = characters.map((c)=>{
    return c.name
})
console.log('Array of Names')
console.log(characterNames)

//2. Get array of all heights
let characterHeight = characters.map((c)=>{
    return c.height
})
console.log('Array of heights')
console.log(characterHeight)

//3. Get array of objects with just name and height properties
let charNameHeight = characters.map((c)=>{
    return {name:c.name, height:c.height}
})
console.log('Name and height')
console.log(charNameHeight)

//4. Get array of all first names
const charName = characters.map((c)=>{
    return c.name
})

console.log('Name')
console.log(charName[0]);
console.log(charName)

//***REDUCE***
//1. Get total mass of all characters
let charMass = characters.map((c)=>{
    return c.mass
})

let massSum = charMass.reduce((accum, num)=>{
    return accum + num
},0)
console.log('Total mass of all characters')
console.log(massSum)

//2. Get total height of all characters
let charHeight = characters.map((c)=>{
    return c.height
})

let totalHeight = charHeight.reduce((accum, num)=>{
    return accum + num
},0)
console.log('Total height of all characters')
console.log(totalHeight)

//3. Get total number of characters by eye color
let charEyes = characters.map((c)=>{
    return c.eye_color
})


//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

//***Bonus***/
// come up with your own

