/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, 
un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzae il programma.
*/


// alert("random 5 numeri casuali"); (Math.floor(Math.random() * (max - min)) + min;)

// DOPO 30 SECONTI 
// setTimeout(myFunction, 3000);
// function myFunction() {
//       prompt("UN PROMPT ALLA VOLTA ");
// }


// FUNZIONE DI CONFONTO DEI NUMERI NELL'ARRAY CON QUELLI INSERITI DALL'UTENTE

// ***************************      INIZIO      *****************************

/**************     Un alert espone 5 numeri casuali diversi.   *************/

var numCasual = [];

function getRandom(max, min){
   return Math.floor(Math.random() * (max - min)) + min;
}

function inArray(array, number){
  var i = 0;
  while (i < array.length){
    if (number === array[i]) {
      return true;
    }
    i++;
  }
}



while (numCasual.length !==5) {
  var numRandom = getRandom(1, 100);
  if(! inArray(numCasual, numRandom)) {
    numCasual.push(numRandom);
  }
}

alert("random 5 numeri casuali " + numCasual);


//Dopo 30 secondi l’utente deve inserire
setTimeout(myFunction, 3000);
function myFunction() {
    var i = 0, numUser = [];
    do{
        numUser = Number(prompt("Inserisci un numero di quelli usciti prima"));
    } while (numUser.length == 5) ;
}