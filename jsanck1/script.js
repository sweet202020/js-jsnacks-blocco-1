//Snack 1
//L’utente inserisce due numeri in successione, con due prompt.
const firstNumber = prompt ('scrivi il primo numero');
/* console.log(firstNumber); */
const secondNumber = prompt ('scrivi il secondo numero');
/* console.log(secondNumber); */

//Il software stampa il maggiore
//utilizzo il costrutto if e stampo il numero più greande
if (firstNumber>secondNumber){
    console.log(" il numero più grande è: " + firstNumber);
} else if (secondNumber>firstNumber){
    console.log(" il numero più grande è: " + secondNumber);
} else {
    console.log ("i numeri sono uguali");
}