
// const form = document.getElementById("formulaire")
// const quoteList = document.getElementById("quote-list")
// console.log("test", quoteList)

//const { createElement } = require("react");

//const { createElement } = require("react")

// form.addEventListener("submit", (event) => { // écouteur d'événements "submit" car c'est un formulaire
//     event.preventDefault() // permet d'éviter de recharger la page et d'afficher le résultat après le remplissage des champs.

//     const citation = document.getElementById("citation").value //.value correspond à la saisie dans le champs citation (gelElementById)
//     const author = document.getElementById("nomAuthor").value  //.value correspond à la saisie dans le champs author (gelElementById)
//     const citationParagraph = document.createElement("p")  // création d'un const_1 correspondant à la création d'un élément HTML "p" (createElement)
//     const authorParagraph = document.createElement("p")    // création d'un const_2 correspondant à la création d'un élément HTML "p" (createElement)
//     //console.log(citationParagraph) 
//     citationParagraph.innerText = citation  // modification du texte contenu dans la variable *citation*
//     quoteList.appendChild(citationParagraph) // création d'un enfant dans la <div></div> id="quoteList"
//     authorParagraph.innerText = author  // modification du texte contenu dans la variable *author*
//     quoteList.appendChild(authorParagraph)  // création d'un enfant dans la <div></div> id="quoteList"

//     document.getElementById("citation").value = "" // permet de vider la valeur des champs après le submit
//     document.getElementById("nomAuthor").value = ""  // permet de vider la valeur des champs après le submit

// })
const form = document.getElementById("formulaire");
const quoteList = document.getElementById("quote-list");

form.addEventListener("submit" , (event) =>{
    event.preventDefault()

    const citation = document.getElementById("citation").value;
    const author = document.getElementById("quote-list").value;
    const paraCitation = document.createElement("p");
    const paraAuthor = document.createElement("p");

    paraCitation.innerText=citation
    quoteList.appendChild(paraCitation)
    paraAuthor.innerText=author
    quoteList.appendChild(paraAuthor)

})



