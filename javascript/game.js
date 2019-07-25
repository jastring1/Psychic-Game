/* James Stringfield
   game.js

   This is the Javascript file for The Psychic Game Homework Assignment

*/

//Declaring all Global Variables that will be needed throughout the program
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter;
var wins = 0;
var losses = 0;
var userGuess;
var guessedLetters = "";
var numGuesses = 10;
var totalGuesses = 10;

// These Variables will be accessing the HTML document to update each time the user inputs
var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userguess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("guessleft-text");
var guessArray = document.getElementById("array-text");

//Method for generating a random index in the array of letters
var randomLetter = letters[Math.floor(Math.random() * letters.length)];

//Event Listener - listening for key input of the keyboard
document.onkeyup = function (event) {
    var userGuess = event.key;
//forcing the input to lowercase to minimize user errors
    userGuess = userGuess.toLowerCase();

//Logical Statement to determine if the user has not guessed the correct letter. Updates the number of guesses left 
//and updates the array of guessed letters
    if (userGuess !== randomLetter) {
        numGuesses--;
        guessedLetters = guessedLetters + userGuess + " ";

    }
//Logical Statement to determine if the user has guessed the correct letter. If so the win array will be incremented
//and the number of guesses will be reset to 10. Also the array of guesses letters will be cleared and a new random letter
//will be generated
    if (userGuess === randomLetter) {
        wins++;
        numGuesses = 10;
        guessedLetters = "";
        userGuess="";
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
        
    }
//Once the letters have been checked, we will check to see if the number of guesses is at 0. If so then we will
//increment the losses variable, set the number of guesses back to 10, clear the array of guesses and generate a new random letter
    if (numGuesses === 0) {
        losses++;
        numGuesses = 10;
        guessedLetters = "";
        userGuess="";
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
        

    }
// Output that will be updated each time a key is pressed
    userGuessText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    leftText.textContent = "Guesses Left: " + numGuesses;
    guessArray.textContent = "Guessed Letters: " + guessedLetters;


};



