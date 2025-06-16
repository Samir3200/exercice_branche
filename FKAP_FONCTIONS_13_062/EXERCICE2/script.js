
//EXERCICE 2
//1.
function carre (number){

    return  number * number
}
console.log (carre(3))
console.log (carre(2))


//2.
function Ten (num){ 
    
        return num*10
}
console.log (Ten(9))




//3.
function number(num) {
    console.log (num)

    let carre = num * num
    console.log (carre)

    let par10 = carre*10
    console.log (par10)

    return{
        num,
        carre,
        par10
    }
}
number(7)

 //"Je n'ai réussi à faire cet exercice"
    /*prompt(num)
    let input = prompt("saisir un nombre");
    let num = input;

      let resultat = number(num);
      console.log(resultat);
   
prompt()*/
