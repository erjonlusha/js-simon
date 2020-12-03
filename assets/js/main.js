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

alert("Ricordati questi numeri " + numCasual);


//Dopo 30 secondi l’utente deve inserire
var numUser=[];
var corretti=[];
setTimeout(myFunction1, 3000);
function myFunction1() {

    var clock = setInterval(myFunction, 3000);
    function myFunction() {
        for (var i = 0; numUser.length < 5; i++) {
            var userNumero = Number(prompt("Inserisci un numero di quelli usciti prima"));
            while (inArray(numUser, userNumero)) {
                alert("Il numero è stato già inserito")
                var userNumero = Number(prompt("Inserisci un numero di quelli usciti prima"));    
            }
            numUser.push(userNumero);
        }

        if (numUser.length == 5) { 
            clearInterval(clock);
        }

        // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
        // var numCasual= [23,45,74];
        // var numUser= [23,45,74];
        for (var i=0;i<numUser.length;i++) {
            rv = false;
            for (var j=0;j<numCasual.length;j++) {
                rv = rv || numUser[i]==numCasual[j];
                if ( numUser[i]===numCasual[j]){
                    corretti[i]=numUser[i];
                }
            }
            if(rv) {
                alert("I numeri corretti sono " + corretti[i]);
              }
              
        }
        alert("I numeri corretti sono " + corretti.length);
        // console.log("DENTRO FUNZIONE");        
        // console.log("lunghezza numero casuale " + numCasual.length);
        // console.log("numero casuale " + numCasual);
        // console.log("lunghezza numero utente " + numUser.length);
        // console.log("numero utente " + numUser);
    }

    
}
// console.log("FUORI FUNZIONE" );
// console.log("lunghezza numero casuale " + numCasual.length);
console.log("numero casuale " + numCasual);
// console.log("lunghezza numero utente " + numUser.length);
// console.log("numero utente " + numUser);

