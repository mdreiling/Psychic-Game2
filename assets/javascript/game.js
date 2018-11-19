
// Variables ======================================

//Array of possible computer choices.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array of user guesses
var userGuesses = [];

// Declaring variables for wins, losses, starting guesses, remaining guesses, round result.
var wins = 0;
var losses = 0;
var startingGuesses = 9;
var remainingGuesses = startingGuesses;
var roundResult = "No round has been completed";

// Declaring variables that hold references to HTML items.
var directionsText = document.querySelector("#directions-text"); 
var winsText = document.querySelector("#wins-text")
var lossesText = document.querySelector("#losses-text");
var guessesRemainingText = document.querySelector("#guessesRemaining-text");
var userGuessesText = document.querySelector("#userGuesses-text");
var roundResultText = document.querySelector("#roundResult-text");
var computerSelection = "0";

// Functions ======================================

// Game Reset Function to reset computer choice.

function gameReset() {
    computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};



// Main Process ===================================
gameReset();

// Function to run whenver the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z") {
            
        // Compares User Guess and Computer Selection and writes results to console.log.
        if (userGuess===computerSelection) {
            console.log("You win!")
            wins++;
            remainingGuesses = startingGuesses;
            userGuesses = [];
            roundResult = "WIN";
            gameReset();

        }  else if (remainingGuesses > 1) {
            console.log("You selected " + userGuess + " | Computer picked " + computerSelection)
            remainingGuesses--;
            userGuesses.push(" " + userGuess);
        
        }   else {
            losses++;
            remainingGuesses = startingGuesses;
            userGuesses = [];
            roundResult = "LOSS";
            gameReset();
        }

    } else {
         alert("Please enter a letter to make a guess.")
    };

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesRemainingText.textContent = "Guesses remaining: " + remainingGuesses;
    userGuessesText.textContent = "Your guesses so far: " + userGuesses;
    roundResultText.textContent = "The result of the previous round: " + roundResult;

};

