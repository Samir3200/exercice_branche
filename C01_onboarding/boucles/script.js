/*let fruits = ["banane", "ananas", "mangue", "pasteque"]

// console.log(fruits[3])
// console.log(fruits.length)
//fruits.push("poire")
console.log(fruits.length)
// console.log(fruits)
// console.log(fruits[4])

for(let i=0; i<fruits.length; i++){
console.log(`le fruit à l'indice ${i} est ${fruits[i]}`)
}
*/
/*let ada = ["Frida", "Fatoumata", "Frances"]
console.log(ada.length)
for(let i=0; i<ada.length; i++){
if (ada[i] == "Frida"){
    console.log ("Laure")
}
else if (ada[i] == "Fatoumata"){
    console.log ("Leila")
}
else if(ada[i]="Frances")
    console.log ("Vi")*/



let ada = ["Frida", "Fatoumata", "Frances"];
for (let i = 0; i < ada.length; i++){
    //console.log(ada[i]) 
if (ada[i] === "Frida"){
console.log(`Pour la promo ${ada[i]}, l'encadrante est Laure`);
} else if (ada[i] === "Fatoumata") {
console.log(`Pour la promo ${ada[i]}, l'encadrante est Laila`
);
} else if (ada[i] === 'Frances') {
console.log(`Pour la promo ${ada[i]}, l'encadrante est Vi`);
}


}
    
