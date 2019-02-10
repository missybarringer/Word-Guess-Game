// Pseudocode
// Main header is static
// Song guessed correctly prints when won and play the audio as well
// Print text saying "Press any Key to get started!"
// Next print wins and increment per win
// Print current word then dashes below that correspond to the length of the word 
// (letters appear here until word is guessed or # of guesses remaining are out) what happens at that point???
// If guessed print word & increment win counter
// Number of guesses remaining (start at 12 or 13 and decrement with each wrong guess)
// Letters Already Guessed
// Print letters typed (if same letter typed previously doesn't print here and doesn't decrease remaining)
// Left column has the picture of the band that they one with - changes with next win

//Set wins variable to 0
var wins = 0;
//Array of Animals
// docWins();
// function docWins() {
//     document.getElementById("wins").innerHTML = wins;
// }
var farmAnimals = ["donkey","horse","alpaca","chicken","goat"];
//Choose a random word from the animal array
var currentWord = farmAnimals[Math.floor(Math.random() * farmAnimals.length)].toUpperCase();
var progressWord = [];
var resetLettersGuessed = ""
var guessesLeft = 12;

console.log(currentWord);

for (i = 0; i < currentWord.length; i++) {
    progressWord.push("_");
}

// var progressWord.replace(","," ", -1);
window.onload = function() {
    docProgressWord();
    function docProgressWord() {
        document.getElementById("word-guess").innerHTML =  progressWord.join(" ");
    }
    docWins();
    function docWins() {
        document.getElementById("wins").innerHTML=wins
    }
}
// letterInWord();

function letterInWord(letter) {
    var positions = new Array();
    for (i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter)
        positions.push(i);
    }
    return positions;
}

function lettersToGuess() {
    var toGuess = 0;
    for (i in progressWord) {
        if (progressWord[i] === "_")
        toGuess++;
    }
    return toGuess;
}

document.onkeyup = function(event) {
    var letter = event.key;
    var lettersGuessed = letter.toUpperCase();
    
    console.log("you have typed a letter: ".concat(letter));
    
    var positions = letterInWord(lettersGuessed);
    
    if (positions.length) {
        
        for (i = 0; i < positions.length; i++) {
            progressWord[positions[i]] = lettersGuessed;
        }
        docProgressWord();
        function docProgressWord() {
            document.getElementById("word-guess").innerHTML =  progressWord.join(" ");
        }
    } else {
        LettersGuessed();
        function LettersGuessed() {
            document.getElementById("letters-guessed").innerHTML += lettersGuessed + " ";
        
        // subtract a point from guesses left
        guessesLeft--;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
    }
    }
    
    if (guessesLeft === 0) {
        location.reload();
    }
    
    if (lettersToGuess() == 0) {       //used to have ==
        //reset guesses left
        guessesLeft = 12;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        // reset letters guessed
        document.getElementById("letters-guessed").innerHTML = resetLettersGuessed;
        // generate a new word to guess
        currentWord = farmAnimals[Math.floor(Math.random() * farmAnimals.length)].toUpperCase();
        // pushes blanks for new word
        progressWord = [];
        for (i = 0; i < currentWord.length; i++) {
            progressWord.push("_");
        }
        document.getElementById("word-guess").innerHTML = progressWord.join(" ");
        
        wins++;
        docWins();
        function docWins() {
            document.getElementById("wins").innerHTML=wins;
        }
        console.log(currentWord);
        console.log(progressWord);
        // letterInWord();
    }
    console.log(wins);
                                            // if (guessesLeft === 12)  {
                                            //      location.reload();
                                            // }
}
// location.reload();

// function lettersToGuess() {
    //     var i;
    //     var toGuess = 0;
    //     for (i in progressWord) {
        //         if (progressWord[i] === "_")
        //             toGuess++;
        //     }
        //     return toGuess;
// }
// docToGuess(); {
//     function docToGuess() {
//         document.getElementById("to-guess").innerHTML = toGuess;
//     }
// }





