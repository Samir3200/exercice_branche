
let compteur = 0;
const bouton = document.getElementById("bouton");
const increment = document.getElementById("compteur");

bouton.addEventListener(`click`, () => {
    compteur ++

     increment.innerText = compteur;
});
