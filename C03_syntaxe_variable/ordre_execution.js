//exercice 3 : Ordre d'execution

let firstLanguage = "HTML";
let secondLanguage = "PHP";
let thirdLanguage = firstLanguage;   // Comme thirdLanguage est = à firstLanguage qui, lui même, est "HTML", thirdLangage est donc "HTML"
firstLanguage = "Javascript";
secondLanguage = firstLanguage;     // Sur la ligne précédente, firstLangage a été mis à jour en "Javascript". Donc secondLanguage est "javascript"


let firstLanguage = "HTML";
let secondLanguage = "PHP";
firstLanguage = "Javascript";
let thirdLanguage = firstLanguage;  // thirdLanguage hérite des mêmes propriétés que firstLanguage. Donc thirdLanguage est "Javascript"
secondLanguage = firstLanguage;    // secondLanguage est égal à la mise à jour effectuée sur firstLangage. Donc secondLanguage est "Javascript"