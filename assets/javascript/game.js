//Declare variables for counters and arrays.
var wins = 0;
var losses = 0;
var guesses = 9;
var guessArray = [];

var alphArray = ["a","b","c","d","e"];

//Function executes when key is pressed
document.onkeyup = function(event) {
  //Determines which key is pressed.  Later convert to lowercase
  var userGuess = event.key;

  //Generate a random letter by the computer.
  var compRandom = alphArray[Math.floor(Math.random() * alphArray.length)];

  //Compare keypress to random and increment or decrement accordingly using functions.
  //console.log(document); //Hima suggested.  I don't understand.
  console.log(userGuess);
  console.log(compRandom);
  console.log(guesses)

  if (guesses = 0) {
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
    //Write out result.
    document.querySelector("#wins").innerHTML = wins;
    //Reset guesses counter to end loop.
    //guesses = 0;
  }

  function miss() {
    guesses--;
    //Write out result.
    document.querySelector("#remaining").innerHTML = guesses;
    //Push out user selection to a displayable array.
  }

  function loss() {
    losses++;
    //Write out result.
    document.querySelector("#losses").innerHTML = losses;
    //Reset guesses counter to end loop.
    //guesses = 0;

  }
