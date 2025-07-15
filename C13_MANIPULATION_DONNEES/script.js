const candidates = ['Le Filip', 'Ruby On The Nail', 'Leona Winter', 'Lula Strega', 'Misty Phoenix',
    'Perseo', 'Norma Bell', 'Edeha Noire', 'Magnetica', 'Afrodite Amour'];

//console.log(candidates[0], candidates[7])

const candidatesList = document.getElementById("candidates")
const list = document.getElementById("list")

function affich() {
    for (let i = 0; i < candidates.length; i++) {
        console.log(candidates[i])
        const liste = document.createElement("li")
        liste.innerText = candidates[i]
        candidatesList.appendChild(liste)
    }
}
affich()




