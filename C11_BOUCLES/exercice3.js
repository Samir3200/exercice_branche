
let user = prompt("Entrez un nombre entre 0 et 10 :")


let number = parseInt(user)

if (!isNaN(number) && number >= 0 && number <= 10) {
  for (let i = number; i >= 0; i--) {
  alert(i)
  }
  } else {
  alert("Erreur : Veuillez entrer un nombre valide entre 0 et 10.")}
