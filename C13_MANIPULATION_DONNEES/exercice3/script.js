const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);


// Etape 1
console.log(typeof(data))

// Etape 2
console.log(data[0])

// Etape 3
console.log(data.length)

// Etape 4
console.log(data[4])


// Etape 5
let age = 0
let nbrPerson = data.length
    for (let i = 0;i<data.length;i++) {
        age += data[i].age
    }
    console.log(age/nbrPerson)