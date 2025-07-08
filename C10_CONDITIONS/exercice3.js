// int tmp = 15; 

//     if (tmp < 0)   
//         printf("Freezing weather.");
//     else if (tmp < 10)  
//         printf("Very cold weather.");
//     else if (tmp < 20)  
//         printf("Cold weather.");   .
//     else if (tmp < 30)  
//         printf("Normal in temp."); 
//     else if (tmp < 40)   
//         printf("Its Hot."); 
//     else  
//         printf("Its very hot.");

// Cette fonction permet d'écrire une phrase en fonction de la condition dans laquelle se trouve la température.
// Une petite phrase fait référence à chaque niveau de température.


//const tmp = 15  _____J'ai commenté cette ligne pour ne pas perturber le code (switch case).

function weather(tmp) {
    if (tmp < 0) {
        console.log("Freezzing weather.")
    } else if (tmp < 20) {
        console.log("Very cold weather.")
    } else if  (tmp < 30) {
        console.log("Normal in temp.")
    } else if (tmp <40) {
        console.log("Its Hot.")
    } else console.log("Its very Hot.")
}
weather(18)


let tmp = 15;

switch (true) {
case (tmp < 10): 
    console.log("Freezzing weather.")
    break
case (tmp < 20): 
    console.log("Very cold weather.")
    break
case (tmp < 30): 
    console.log("Normal in temp.")
    break  
case (tmp < 40): 
    console.log("Normal in temp.")
    break
 default : ("It's very hot")}


