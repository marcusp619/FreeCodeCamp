for (var i = 0; i < 100; i++) {
	console.log(i);
}

//Sneak Preview of SWITCH

var lunch = prompt("What do you want for lunch?");

switch(lunch){
	case 'sandwich':
	console.log("Sure thing! One sandwich, coming up.");
	break;
	case 'soup':
	console.log("Got it! Tomato's my favorite.");
	break;
	case 'salad':
	console.log("Sounds good! How about a caesar salad?");
	break;
	case 'pie':
	console.log("Pie's not a meal!");
	break;
	default:
	console.log("Huh! I'm not sure what " + lunch " is. How does a sandwich sound?")
}

//The SWTICH setup

switch (/* Some expression*/) {
	case 'option 1':
		//	Do something
		break;
	case 'option 2':
		//	Do something
	case 'option 3':
		//	Do something
		break;
	default:
		//	Do another thing
}

//Do While loops

/* This var will be the random num from 1 to argurment */
var randomNumber = getRandomNumber(10);
// This will hold the users guesses
var guess;
// Keep track of the number of guesses
var guessCount= 0;
// When the player guesses correct so we can end the do while
var correctGuess = false;

// The random num Generator

function getRandomNumber(upper) {
	var num = Math.floor(Math.random() * upper) + 1;
	return num;
}

do {
	// Prompts the user with the question
	guess = prompt("I am thinking of a number between 1 and 10. What is it?");
	// Increase guess counter each guess
	guessCount += 1;
	// Check to see if the answer is right
	// the parseInt method converts the string into a number compares
	if (parseInt(guess) === randomNumber) {
    correctGuess = true;
	}
} while (! correctGuess);
/*
 * While loop is NOT true it will cont. to run that what the while means
 */
document.write("<h1>You guessed the number!</h1>");
document.write("It took you" + guessCount);

// For Loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}


