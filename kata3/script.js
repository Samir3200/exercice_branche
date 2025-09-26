const calendrierDuCrayon = {
    septembre: 9,
    octobre: 10,
    novembre:11,
    decembre: 12,
    janvier: 1,
    fevrier: 2,
    mars: 3,
    avril: 4,
    mai: 5,
    juin: 6,
};

function drawMyPen(mois) {
    const hauteur = calendrierDuCrayon[mois];
    if (hauteur === undefined) {
        return `Mois "${mois}" non reconnu.`;
    }

    let crayon = " /\\\n/__\\\n";

    // Ajout du corps du crayon
    for (let i = 0; i < hauteur; i++) {
        crayon += "||||\n";
    }

    // Ajout de la gomme
    if (hauteur >= 5) {
        crayon += "|__|\n|  |\n|__|";
    } else {
        crayon += "|__|\n|__|";
    }

    return crayon;
}

// 🔽 Exemples d'utilisation :
console.log(drawMyPen("janvier"));
// console.log(drawMyPen("fevrier"));
// console.log(drawMyPen("mars"));
// console.log(drawMyPen("juin"));
