var choices = ["a","b","c","d","e","f",
"g","h","i","j","k","l","m","n","o","p",
"q","r","s","t","u","v","w","y","z"];
var i;
var computerChoice;
var winScore = 0;
var loseScore = 0;
var guessesLeft = 9 ;
var win_span = document.getElementById("win");
var lose_span = document.getElementById("lose");
var guessesLeft_span = document.getElementById("guessesLeft");
guessesLeft_span.innerHTML = guessesLeft;
var guesses_span = document.getElementById("guesses");


// randomly generated computer pick
computerRandomChoice();

document.onkeyup = function(event){
    
    playerChoice = event.key;
    playerGuesses(); 
     
    if ( guessesLeft === 1 ){
        lose();
    } else if ( playerChoice === computerChoice){
        win();
    } else if ( playerChoice != computerChoice  ){
        guessesLeftCounter();
        
    };
};

//computer randomly picks a letter
function computerRandomChoice(){
    i = Math.floor(Math.random()* choices.length);
    computerChoice = choices[i];
    console.log("computer picked " + computerChoice)
};




//win plus 1
function win(){
    winScore++;
    win_span.innerHTML = winScore;
    reset();
};

//lose plus 1
function lose(){
    loseScore++;
    lose_span.innerHTML = loseScore;
    reset();
};

//Keeps track of how many guesses are left
function guessesLeftCounter(){
    guessesLeft--;
    guessesLeft_span.innerHTML = guessesLeft;
    
};

//Game resets number of guesses left to 9 and guessed letters
function reset(){
    computerRandomChoice();
    guessesLeft = 9;
    guessesLeft_span.innerHTML = guessesLeft;
    guesses_span.innerHTML = "";    
};

//appends the key value inside the guesses span element
function playerGuesses(){
    var userKeyInput = document.createTextNode("  " + playerChoice);
    guesses_span.appendChild(userKeyInput);
}

