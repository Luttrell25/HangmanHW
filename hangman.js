console.log("test");

//variables
var wordBank =  ["baseball", "golf", "sailing", "lacrosse", "football", "soccer", "tennis"];
var chosenWord = "";
var wordLength = [];
var blanks = 0;
var spaces = [];
var incorrectGuess = [];

var wins = 0;
var losses = 0;
var guessesTotal = 10;

//functions
function chooseWord() {
  chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  wordLength = chosenWord.split("");
  blanks = wordLength.length;

  for (var i = 0; i < blanks; i++) {
    spaces.push("_");
  }



  console.log(chosenWord);
  console.log(wordLength);
  console.log(blanks);
  console.log(spaces);

  document.getElementById("wordBlanks").innerHTML = spaces.join(" ");
  document.getElementById("lettersGuessed").innerHTML = incorrectGuess;
  document.getElementById("win").innerHTML = wins;
  document.getElementById("loss").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesTotal;

  // chosenWord = "";
  // spaces = [];

};

function letterGuess(input) {
  var correctGuess = false;
  console.log(correctGuess);
  for (var i = 0; i <blanks; i++) {
    if (chosenWord[i] === input) {
      correctGuess = true;
      console.log(input + "was found!");
    }
  }

  if (correctGuess) {
    for (var i = 0; i <blanks; i++) {
      if (chosenWord[i] === input) {
        spaces[i] = input;
      }
    }
  }

  else {
    incorrectGuess.push(input);
    guessesTotal--;
  }


};

function roundComplete() {
  console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesTotal);

  document.getElementById("guessesLeft").innerHTML = guessesTotal;
  document.getElementById("wordBlanks").innerHTML = spaces.join(" ");
  document.getElementById("lettersGuessed").innerHTML = incorrectGuess.join(" ");

  if (wordLength.toString() === spaces.toString()) {
    wins++;
    alert("You won!");
    document.getElementById("win").innerHTML = wins;
    chosenWord = "";
    wordLength = [];
    blanks = 0;
    spaces = [];
    incorrectGuess = [];
    guessesTotal = 10;

    chooseWord();
  } else if (guessesTotal === 0) {
    losses--;
    alert("You lost!");
    document.getElementById(loss).innerHTML = losses;
  }
};

chooseWord();

document.onkeyup = function(event) {
  var guess = String.fromCharCode(event.keyCode).toLowerCase();
  letterGuess(guess);
  roundComplete();
};
