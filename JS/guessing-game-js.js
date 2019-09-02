// secret number creation
var SecretNumber=4;

// take user's guess input

var Guess=Number(prompt("Guess a number"));

// check if guess is correct 

if (Guess===SecretNumber){
	alert("You guessed it right");
	console.log("your guess is correct");
}

// check if guess is higher
else if (Guess>SecretNumber){
	alert("Too high");
}

// check if guess is lower
else{
	alert("Too low")
}