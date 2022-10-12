//L’utente inserisce due parole in successione, con due prompt.
const firstWord = prompt('inserisci la prima parola')
const secondWord = prompt('inserisci la seconda parola')
//Il software stampa prima la parola più corta, poi la parola più lunga. 
if (firstWord.length>secondWord.length){
    const first=(secondWord + ' ' + firstWord);
    document.querySelector('p').innerHTML=first
} else if (secondWord.length>firstWord.length){
    const second = (firstWord + ' ' + secondWord);
    document.querySelector('p').innerHTML=second

} else {
    const same = ('le due parole hanno lunghezze uguali');
    document.querySelector('p').innerHTML=same
}
