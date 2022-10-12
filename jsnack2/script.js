//L’utente inserisce due parole in successione, con due prompt.
const firstWord = prompt('inserisci la prima parola')
const secondWord = prompt('inserisci la seconda parola')
//Il software stampa prima la parola più corta, poi la parola più lunga. 
if (firstWord.length>secondWord.length){
    console.log(secondWord + ' ' + firstWord);
} else if (secondWord.length>firstWord.length){
    console.log(firstWord + ' ' + secondWord);
} else {
    console.log('le due parole hanno lunghezze uguali');
}
