//Il software deve chiedere per 10 volte all’utente di inserire un numero.
/* let somma = 0;
for (i=0; i<10; i++){
    const num= Number(prompt('inserisci un numero'));
    (somma += num)  
    
}

console.log(somma) */

//Il programma stampa la somma di tutti i numeri inseriti. 

//utilizzo il ciclo while
/* 
//contatore
while(condizione){

    //istruzione per bloccare il ciclo
}
*/

let somma=0;
i=0;
while (i<10){
    const num = Number(prompt('inserisci un numero'));
    (somma+=num);
    i++//istruzione che blocca il ciclo
}
console.log(somma)