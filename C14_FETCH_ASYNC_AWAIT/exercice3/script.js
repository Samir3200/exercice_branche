async function Get() {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random"); // random permet d'afficher des citations aléatoires
        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        const data = await response.json();
        const div = document.getElementById("resultat");
        div.innerHTML = ""; // Efface avant d'afficher une nouvelle citation

        const citation = document.createElement("p");
        citation.textContent = `"${data.quote}"`;
        div.appendChild(citation);

        const auteur = document.createElement("p");
        auteur.textContent = `${data.author}`;
        div.appendChild(auteur);

    } catch (error) {
        document.getElementById("resultat").textContent = "Une erreur est survenue : " // message en cas de problème(s)
    }

    // fonction pas totalement terminer : 1-le message est affiché avant d'appuyer sur le bouton. 2-Les éléments sont affichés avant la fin du chargement
    function etatCharge() {
        document.getElementById('loader').style.display = 'block';   // affiche le message de chargement
        document.getElementById('content').style.display = 'none';   // masque le message de fin de chargement

        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';   // masque le message de chargement
            document.getElementById('content').style.display = 'block'; // affiche le message de fin de chargement
        }, 3000);
    }
    etatCharge();

}
