// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// costante bottone - il bottone con addListener 
const boxMail = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com'];
let userMail = document.getElementById('userMail').value;
let trovato = false;
let button = document.querySelector('.btn');

button.addEventListener('click', function() {
        for (let i = 0; i < boxMail.length; i++) {
            if (userMail.toLowerCase() === boxMail.toLowerCase()) {
                trovato = true;
            }
        }
        const result = document.getElementById('box');
        if (trovato) {
            result.innerHTML = 'Disponibile';
        } else {
            result.innerHTML = 'Non Disponibile';
        }
    })