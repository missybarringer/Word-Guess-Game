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
    var farmAnimals = ["donkey","horse","alpaca","chicken","goat"];
    //Choose a random word from the animal array
    var currentWord = farmAnimals[Math.floor(Math.random() * farmAnimals.length)].toUpperCase();
    var progressWord = [];
    var resetLettersGuessed = "";
    var guessesLeft = 12;
    var guesses = [];
    var wrongLetter=[];
    var oldCurrentWord=[];

    
    console.log(currentWord);
    // for the length of the word push underscores
    for (i = 0; i < currentWord.length; i++) {
        progressWord.push("_");
    }
    // loading the underscores and initial 0
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
    // finding the position of each letter in the word
    function letterInWord(letter) {
        var positions = new Array();
        for (i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === letter)
            positions.push(i);
        }
        return positions;
    }
    // finding the remaining underscores to push out
    function lettersToGuess() {
        var toGuess = 0;
        for (i in progressWord) {
            if (progressWord[i] === "_")
            toGuess++;
        }
        return toGuess;
    }
    // starting the game with the onkeyup event
    document.onkeyup = function(event) {
        var letter = event.key;
        var lettersGuessed = letter.toUpperCase();
        guesses.push(lettersGuessed);
        
        console.log("you have typed a letter: ".concat(letter));
        
        var positions = letterInWord(lettersGuessed);
        
        if (positions.length) {
            //loop through the positions & print the underscores & letters guessed right
            for (i = 0; i < positions.length; i++) {
                progressWord[positions[i]] = lettersGuessed;
            }
            docProgressWord();
            function docProgressWord() {
                document.getElementById("word-guess").innerHTML =  progressWord.join("  ");
            }
        } else {
            //else take the letters guessed
            LettersGuessed();
            function LettersGuessed() {
            // print the letters guessed
            console.log(guesses);
                if (currentWord.indexOf(letter) < 0 ) {
                    if (wrongLetter.indexOf(letter) < 0) {
                        wrongLetter.push(letter);
                // subtract a point from guesses left
                guessesLeft--;
                    }
                //print the guesses left number
                document.getElementById("wrong-letters").innerHTML = wrongLetter;
                document.getElementById("guesses-left").innerHTML = guessesLeft;
                }
            // }
    }
        }
        // if no guesses left then load the next word   
        if (guessesLeft === 0) {
            location.reload();
        }
        
        // if user guessed the word clear out variables and reset guesseLeft and dashes for new word
        if (lettersToGuess() === 0) {       //used to have ==
            //reset guesses left
            guessesLeft = 12;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
            // reset letters guessed
            document.getElementById("wrong-letters").innerHTML = resetLettersGuessed;
            oldCurrentWord = currentWord.toUpperCase();
            document.getElementById("old-word").innerHTML = oldCurrentWord;

            // generate a new word to guess
            currentWord = farmAnimals[Math.floor(Math.random() * farmAnimals.length)].toUpperCase();
            // pushes blanks for new word
            progressWord = [];
            for (i = 0; i < currentWord.length; i++) {
                progressWord.push("_");
            }
            document.getElementById("word-guess").innerHTML = progressWord.join(" ");
            wrongLetter = [];
            lettersGuessed = [];
            guesses = [];
            // increment the wins by one and print       
            wins++;
            docWins();
            function docWins() {
                document.getElementById("wins").innerHTML=wins;
            }
            console.log(currentWord);
            console.log(progressWord);
            // letterInWord();
        }
        console.log(lettersGuessed);
        console.log(currentWord);
        console.log(progressWord);
        console.log(wins);
    }






