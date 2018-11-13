//Array of possible computer choices.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array of user guesses
var userGuesses = [];

// Declaring variables for wins, losses, and remaining guesses.
var wins = 0;
var losses = 0;
var remainingGuesses = 10;

// Declaring variables that hold references to HTML items.
var directionsText = document.getElementById("directions-text"); 
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var userGuessesText = document.getElementById("userGuesses-text");

// Function to run whenver the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a selection from the "Computer Choices" array for the Computer Guess.
    var computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
        // Compares User Guess and Computer Selection and writes resules to console.log.
        if (userGuess===computerSelection) {
            console.log("You win!")
            remainingGuesses=10;
        }

        else {
            console.log("You selected " + userGuess + " | Computer picked " + computerSelection);
        }

    // Display user guesses, guesses remainging, wins, and losses
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesRemainingText.textContent = "Guesses Remaining: " + remainingGuesses;
    userGuessesText.textContent = "Your guesses so far: " + userGuesses;
              
};

