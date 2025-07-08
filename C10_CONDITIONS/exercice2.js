
const conducteurs = [
  { prenom: "Mathieu", age: 22 },
  { prenom: "Léa", age: 15 },
  { prenom: "Jean", age: 17 }
];

function isAllowedToDrive(prenom, age){
  const driveAge = 17
     if (age >= driveAge) {
    console.log(`${prenom} a l'âge de conduire`);
  } else {
    console.log(`${prenom} n'a pas le droit de conduire`);
  }
}

for (let i = 0; i < conducteurs.length; i++) {
  const p = conducteurs[i]
  isAllowedToDrive(p.prenom, p.age)
  // if (p.age >= driveAge) {
  //   console.log(`${p.prenom} a l'âge de conduire`);
  // } else {
  //   console.log(`${p.prenom} n'a pas le droit de conduire`);
  // }

}




