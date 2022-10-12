//Snack 1
//L’utente inserisce due numeri in successione, con due prompt.
const firstNumber = prompt ('scrivi il primo numero');
/* console.log(firstNumber); */
const secondNumber = prompt ('scrivi il secondo numero');
/* console.log(secondNumber); */

//Il software stampa il maggiore
//utilizzo il costrutto if e stampo il numero più greande
if (firstNumber>secondNumber){
    const first = (" il numero più grande è: " + firstNumber);
    document.querySelector('p').innerHTML=(first)
} else if (secondNumber>firstNumber){
    const second = (" il numero più grande è: " + secondNumber);
    document.querySelector('p').innerHTML=(second)

} else {
    const same = ("i numeri sono uguali");
    document.querySelector('p').innerHTML=(same)

}