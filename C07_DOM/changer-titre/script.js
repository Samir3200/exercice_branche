
/*const pageTitle = document.querySelector(`h1`)
console.log(pageTitle)
const subscribeButton = document = querySelector("#newsletter")

// par défaut, l'utilisateur a déjà cliqué
let userHasClicked = false;
subscribeButton.addEvenListener('click', () => {
    if (userHasClicked) {
        // L'utilisateur a déjà cliqué le bouton auparavant, donc on passe à false
        userHasClicked = false;
        subscribeButton.innerText = "subscribe";
    } else {
        // l'utilisateur n'a pas déjà cliqué le bouton auparavant, donc on passe à true
        userHasClicked = true;
        subscribeButton.innerText = "unsubscribe";
    };
});
//subscribeButton.innerText = "unsubscribe"*/



const pageTitle = document.querySelector('h1');
const subscribeButton = document.querySelector('#newsletter');
//par défaut, l'utilisateur n'a pas cliqué, donc userHasClicked = false
let userIsSubscrib = false
subscribeButton.addEventListener("click", () => {
    if (userIsSubscrib === true) {
        // l'utilisateur est déjà abonné
        subscribeButton.innerText = "Subscribe";
        // au clique,  on inverse la valeur
        userIsSubscrib = false
    } else {
        // l'utilisateur n'est pas abonné
        subscribeButton.innerText = "Unsubscribe";
        // au clique,  on inverse la valeur
        userIsSubscrib = true;
    }
});