//Declare variables for counters and arrays.
var wins = 0;
var losses = 0;
var guesses = 9;

var alphArray = ["a","b","c","d","e"];

//Function executes when key is pressed
document.onkeyup = function(event) {
  //Determines which key is pressed.  Later convert to lowercase
  var userGuess = event.key;

  //Generate a random letter by the computer.
  var compRandom = alphArray[Math.floor(Math.random() * alphArray.length)];

  //Compare keypress to random and increment or decrement accordingly using functions.

//Increment wins if equal decrement guesses if not.
document.querySelector(#wins).innerHTML =
//Increment losses if remaining guesses < 0.
