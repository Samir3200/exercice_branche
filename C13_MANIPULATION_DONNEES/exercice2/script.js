const obj = {
    "candidate": "Le Filip",
    "age": 29,
    "city": "Paris",
    "region": "Île-de-France"
}

const data = [
    {
        "candidate": "Afrodite Amour",
        "age": 27,
        "city": "Lyon",
        "region": "Auvergne-Rhône-Alpes"
    },
    {
        "candidate": "Edeha Noire",
        "age": 34,
        "city": "Lyon",
        "region": "Auvergne-Rhône-Alpes"
    },
    {
        "candidate": "Le Filip",
        "age": 29,
        "city": "Paris",
        "region": "Île-de-France"
    }
]
console.log(obj.candidate)


 for (let i = 0; i<data.length;i++) {
     console.log(data[i].candidate)
 }

// for (const element of data) {
//     console.log(element.candidate)
// }


let age = 0
let nbrPerson = data.length
for (let i = 0; i < data.length; i++) {
    age += data[i].age
}
console.log(age/nbrPerson)

moyenne = age/nbrPerson
console.log(`La moyenne d'age des personnes est égale à ${moyenne} ans`)





