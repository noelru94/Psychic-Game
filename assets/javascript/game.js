var letters = ["a","b","c","d","e","f",
"g","h","i","j","k","l","m","n","o","p",
"q","r","s","t","u","v","w","y","z"];

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");


// Computer randomly picks a letter from the array
function computerChoice(){

    var random = Math.floor(Math.random() * letters.length);
        random = letters[random];
}
computerChoice();
