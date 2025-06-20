
const horoscopes = [
  {
    sign: 'Bélier',
    description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
  },
  {
    sign: 'Taureau',
    description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
  },
  {
    sign: 'Gémeaux',
    description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
  },
  {
    sign: 'Cancer',
    description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
  }
];

// FONCTION A RETENIR !!!

// creation d'une variable qui coorespond aux éléments à ajouter au HTML virtuel qui est lié à un ID(présent sur l'HTML)
const container = document.getElementById('horoscope');
//creation d'une variable of variable existante du tableau déjà créé
  for (const item of horoscopes) {
//demande à la variable qui regroupe des objets d'ajouter les éléments
//plus éléments à ajouter en ouvrant et fermant les chevrons
  container.innerHTML += `
    <article>
      <h2>${item.sign}</h2>
      <p>${item.description}</p>
    </article> `
}
//*la variable créé au début correspond aux éléments dans la balise <article></article>








/*const container = document.getElementById('horoscope');

 for (const item of horoscopes) {
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  h2.textContent = item.sign;
  const p = document.createElement('p');
  p.textContent = item.description;
  article.appendChild(h2);
   article.appendChild(p);
   container.appendChild(article);
 }*/