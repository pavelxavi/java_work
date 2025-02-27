 
// exo1

// //variable et constante
// let Nom =prompt("entrer votre nom");
// const Age =prompt("entrer votre age");
// console.log("le nom de l'utilisateur est:", nom,"et son age est:", Age)
// console.log("bienvenu je me nome",Nom,"et j'ai ",Age)

// //Fonctions Basiques et Paramètres de Fonctions
// let cpp =prompt("entrer le coùt par participant") ;
// let nb =prompt("entrer le nombre de participant");
// let ct =cpp*nb ;
// console.log("le coùt par participant est de:",cpp,"et nombre de participant et de:",nb,"donc le coùt totale est de:",ct)

// //Conditions if..else 
// function éligible(Age){
//     console.log("l'utilisateur est éligible");
// }
// let Age =prompt("Entrer l'age de l'utilisateur");
// if(Age > 17){
//     console.log("L'utilisateur est éligible à une réduction")
// }else{
//     console.log("L'utilisateur n'est pas éligible")
// }

// //Utilisation de Math
// let nb =3
// let pt_1 =parseInt(prompt("Entre la note du partipant (01)"))
// let pt_2 =parseInt(prompt("Entre la note du partipant (02)"))
// let pt_3 =parseInt(prompt("Entre la note du partipant (03)"))
// let moyene =(pt_1 + pt_2 + pt_3)/nb 
// console.log("la moyenne",moyene)

// //String, Number, et Boolean 
// let nom = "xavi" ;
// let age = 12 ;
// let inscriptionp_payé = true ;
// console.log(typeof nom)
// console.log(typeof age)
// console.log(typeof inscriptionp_payé)

// //Tableaux (Array) 
// let participants = ["nagui,livail,kakarot,eto'o"]
// let new_participants = participants.push("messi")
// console.log(participants)

// // Alert, Prompt, et Console.log()
// let new_inscript =prompt("Entrer le le nom du nouveau inscript")
// alert("nouveau_inscript")
// console.log("Bienvenu",new_inscript,)


// exo2

// Déclaration et Utilisation de Fonctions 

// //somme"function calculateSum"
// function calculateSum(a,b){
//     return a,b;
// }
// let a = 5;
// let b = 3;
// let sum = a + b;
// console.log("la somme est :",sum)
// //moyenne"calculateAverage"
// function calculateAverage(moyenne){
//     return moyenne;
// }
// let nombres =[1,2,3,4,5,6,8,9];
// let somme = nombres.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante, 0);
// let moyenne = somme / nombres.length ;
// console.log(moyenne);
// //mettre un texte en majiscule"C"
// function calculateRectangleArea(texte){
//     return texte ;
// }
// let texte = "hello comment tu vas ?" ;
// let texte_majiscule = texte.toUpperCase()
// console.log(texte_majiscule)
// //aire d'un rectangle"calculateRectangleArea"
// function calculateRectangleArea(longueur,largeur){
//     return longueur,largeur ;
// }
// let longueur =prompt("entrer la longueur");
// let largeur =prompt("entrer la largeur");
// let aire = longueur*largeur ;
// console.log("l'aire du rectangle est:",aire)
// //paire ou impaire "isEven"
// function isEven(nombre){
//     return nombre % 2 ===0;
// }
// let nb =prompt("Entrer un nombre")
// console.log(isEven(nb))
// //  findElement
// function  findElement(Tableau,élément){
//     return Tableau.includes(élément);
// }
// let Tableau = [1,2,3,4,5,8,9];
// console.log( findElement(Tableau,12));
// //fibonacci
// function fibonacci(n){
//     if(n <= 1){
//         return n;
//     }else{
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
// let nombre =prompt("Entrer un nombre")
// console.log(fibonacci(nombre));
// //factorial
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// let nombre =prompt("Entrer un nombre");
// console.log(factorial(nombre));