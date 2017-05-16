var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = 0;

function resetGame() {
    guessesLeft = 9;
    guessesSoFar = 0;
    computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }

document.onkeypress = function(event) {

var userGuess = event.key;

  if (userGuess === computerPick) {
    alert("You win! Start a new game.");
    wins++;
    resetGame();
  }

  else {
    guessesLeft--;
    guessesSoFar++;
  }

  if (guessesLeft === 0) {
    losses++;
    alert("Game over! Start a new game.");
    resetGame();
  }

var html = "<p>Wins: " + wins + "</p>" + 
           "<p>Losses: " + losses + "</p>" + 
           "<p>Guesses Left: " + guessesLeft + "</p>" +
           "<p>Your Guesses So Far: " + guessesSoFar + "</p>";

document.querySelector("#game").innerHTML = html;

};