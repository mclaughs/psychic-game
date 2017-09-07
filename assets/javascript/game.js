//Declare variables for counters and arrays.
var wins = 0;
var losses = 0;
var guessArray = [];
var guesses = 9;

var alphArray = ["a","b","c","d","e"];

if (guesses === 9) {
  var compRandom = alphArray[Math.floor(Math.random() * alphArray.length)];
}

//Function executes when key is pressed
document.onkeyup = function userGuess(event) {
  //Determines which key is pressed.  Later convert to lowercase
  var userPress = event.key;
  var userGuess = userPress.toLowerCase();
  //Generate a random letter by the computer.
  //Compare keypress to random and increment or decrement accordingly using functions.
  //console.log(document); //Hima suggested.  I don't understand.
  console.log(compRandom);
  console.log(userGuess);
  console.log(guesses);

  if (guesses === 0) {
    alert("guesses = " + guesses);
    loss();
    //Reset game.
    return;
  }
  else if (userGuess === compRandom) {
    //alert("hit");
    hit();
  }
  else {
    alert("miss");
    miss();
  }

}

  //"Hit" function.  The only one that's working.

  function hit() {
    //increment counter
    wins++;
    guesses = 9;
    //Write out result.
    document.querySelector("#wins").innerHTML = wins;
    //Reset guesses counter to end loop.
    //guesses = 0;
  }

  function miss() {
    //guesses = guesses - 1;
    guesses--;
    //Write out result.
    document.querySelector("#remaining").innerHTML = guesses;
    //Push out user selection to a displayable array.
  }

  function loss() {
    losses++;
    guesses = 9;
    //Write out result.
    document.querySelector("#losses").innerHTML = losses;
    //Reset guesses counter to end loop.
    //guesses = 0;

  }
