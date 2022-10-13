//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 const vip = [
    'brad pitt',
    'jennifer aniston',
    'bello figo',
    'nino dangelo',
    'mike bongiorno',
    'michael jackson',
 ]


//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
const userName= prompt('inserisci il tuo nome e cognome');
let isInvite="non sei stato invitato";
/* console.log(isInvite) */
let i=0;
while (i<vip.length){
    const vipList = vip[i];
    /* console.log(vipList); */
    if (userName==vipList){
        isInvite='benvenuto alla festa';
       /*  console.log(isInvite) */
        
    }
i++;
}
console.log(isInvite);