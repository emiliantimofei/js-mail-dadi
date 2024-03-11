// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creo boxMail userMail che inserisce l'utente trovato in false ed il bottone collegato 

let button = document.getElementById('btn');

button.addEventListener('click', function() {
    const boxMail = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com'];
    let userMail = document.getElementById('userMail').value;
    let trovato = false;

    for (let i = 0; i < boxMail.length; i++) {
        if (userMail === boxMail[i]) {
            trovato = true;
        }
    }
    let result = document.getElementById('result');
    if (trovato === true) {
        result.innerHTML = 'Disponibile';
    } else {
        result.innerHTML = 'Non Disponibile';
    }
})


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
const dado = [1, 2, 3, 4, 5, 6];
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let userNumber = parseInt(getRndInteger(1, 6));
let computerNumber = parseInt(getRndInteger(1, 6));

let result2 = document.getElementById('result-2');
let button2 = document.getElementById('btn-2');

button2.addEventListener('click', function(){
    if(userNumber > computerNumber){
    result2.innerHTML = 'Hai vinto!';
    } else if(userNumber < computerNumber) {
    result2.innerHTML = 'Hai perso!';
    } else {
    result2.innerHTML = 'Siete pari!';
    }
}
)

