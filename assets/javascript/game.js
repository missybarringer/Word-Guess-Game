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
// Left column has the picture of the band that they won with - changes with next win
/* did not get the last step done - looks like the farm animals array would have to be converted to object with a name: & image: parameters */
/** var farmAnimals = [{name: "donkey", image: "assets/images/donkey.jpg"}, {name: "horse", image: "assets/images/horse.jpg"}, etc...  **/
/*** then create a new farmAnimalsIndex variable to set the index? ***/
/*** then display the image in the last section of code that resets everything and displays the last word won ****/
/**** Link to my Responsive Portfolio with portfolio link to this game added https://missybarringer.github.io/Responsive-Portfolio/ ****/


//Set wins variable to 0
    var wins = 0;
//Array of Animals
    var farmAnimals = ["donkey","horse","alpaca","chicken","goat","rabbit","cow","dog","donkey","duck","goose","ostrich","peacock","pig","rooster","sheep","turkey"];
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
        
        console.log("you typed : ".concat(letter));
        
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
                // print the letters guessed if not in currentWord and not equal to a previous letter typed
                console.log(guesses);
                if (currentWord.indexOf(letter) < 0 ) {
                    if (wrongLetter.indexOf(letter) < 0) {
                        wrongLetter.push(letter);
                // subtract a point from guesses left if wrongLetter
                guessesLeft--;
                    }
                //print the guesses left number and wrongLetters
                document.getElementById("wrong-letters").innerHTML = wrongLetter;
                document.getElementById("guesses-left").innerHTML = guessesLeft;
                
            }
            // }
        }
    }
    // if no guesses left then load the next word   
    if (guessesLeft === 0) {
            //reset guesses left
            guessesLeft = 12;
                // print the guessesLeft #
                document.getElementById("guesses-left").innerHTML = guessesLeft;
                // reset letters guessed to clear out old guesses
                document.getElementById("wrong-letters").innerHTML = resetLettersGuessed;
                // convert oldCurrent word to upperCase and print at top of game
                oldCurrentWord = currentWord.toUpperCase();
                document.getElementById("old-word").innerHTML = oldCurrentWord;

            // generate a new word to guess
            currentWord = farmAnimals[Math.floor(Math.random() * farmAnimals.length)].toUpperCase();
                // pushes blanks for new word
                progressWord = [];
                    for (i = 0; i < currentWord.length; i++) {
                        progressWord.push("_");
                    }
                // prints new word
                document.getElementById("word-guess").innerHTML = progressWord.join(" ");
            // reset variables
            wrongLetter = [];
            lettersGuessed = [];
            guesses = [];
        }
        
        // if user guessed the word clear out variables and reset guesseLeft and dashes for new word
        if (lettersToGuess() === 0) {       //used to have ==
            //reset guesses left
            guessesLeft = 12;
                // print the guessesLeft #
                document.getElementById("guesses-left").innerHTML = guessesLeft;
                // reset letters guessed to clear out old guesses
                document.getElementById("wrong-letters").innerHTML = resetLettersGuessed;
                // convert oldCurrent word to upperCase and print at top of game
                oldCurrentWord = currentWord.toUpperCase();
                document.getElementById("old-word").innerHTML = oldCurrentWord;

            // generate a new word to guess
            currentWord = farmAnimals[Math.floor(Math.random() * farmAnimals.length)].toUpperCase();
                // pushes blanks for new word
                progressWord = [];
                    for (i = 0; i < currentWord.length; i++) {
                        progressWord.push("_");
                    }
                // prints new word
                document.getElementById("word-guess").innerHTML = progressWord.join(" ");
            // reset variables
            wrongLetter = [];
            lettersGuessed = [];
            guesses = [];

            // increment the wins by one and print       
            wins++;
                docWins();
                function docWins() {
                    document.getElementById("wins").innerHTML=wins;
                }
        }
        console.log(lettersGuessed);
        console.log(currentWord);
        console.log(progressWord);
        console.log(wins);
    }






