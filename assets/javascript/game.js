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

var wins = 0;
//Array of Animals
var farmAnimals = ["donkey","horse","alpaca","chicken","goat"];
//Choose a random word
var randNum = Math.floor(Math.random() * farmAnimals.length);
var rightWord = [];
var wrongWord = [];
var choosenWord = farmAnimals[randNum];
var underScore = [];

let docUnderScore = document.getElementById(underScore);
//Create underscores based on the length of the word

function generateUnderscore() {
    for(var i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
        
    }
    return underScore;
// document.getElementById("generateUnderscore").innerHTML=generateUnderscore;
}

document.onkeyup = function(event) {
    var userGuess = event.key;   //51:41
// if Users guess is right
    if(choosenWord.indexOf(userGuess) > -1) {
        //if Users guess is right
        rightWord.push(userGuess);
        underScore[choosenWord.indexOf(userGuess)] = userGuess;
        // docUnderScore[0].innerHTML = underScore.join(' ');
        // docRightGuess[0].innerHTML = rightWord;
        // if(underScore.join('') == choosenWord) {
        //     alert('You Win');
        // }
        console.log(rightWord);
    }
    else {
        wrongWord.push(userGuess);
        console.log(wrongWord);
    console.log(userGuess);
    console.log(underScore);
    }
    // document.getElementById(userGuess).innerHTML = userGuess;
};

// document.getElementById("generateUnderscore").innerHTML="Yes";
window.onload = function() {
    score();
    function score() {
        document.getElementById("wins").innerHTML =wins;
    };
}


console.log(choosenWord);
console.log(generateUnderscore());
