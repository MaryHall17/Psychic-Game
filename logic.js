
lettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//Randomize function. Browser will pick a random letter.
function randomizeLetters () {
//Create a random number from the letters array
	// We generate a random number from the array.
	number = Math.floor((Math.random() * lettersArray.length));
	console.log(lettersArray[number]);
	console.log(number);
	//Variant for guessing function
	letter=lettersArray[number];
	//Open the console to see the letter, if you want! :-)
	console.log(letter);

};


// This array stores the letters the user guessed from the pushed keys.
lettersGuessedArray = [];
//This event determines if the correct letter is guessed and renders a winning situation.
addEventListener("keypress", function guessFunction(event) {
	guessesLeft = document.getElementById("guesses_left").innerHTML;
	integer = parseInt(guessesLeft);
	wins = document.getElementById("wins").innerHTML;
	score = parseInt(wins);
	losses = document.getElementById("losses").innerHTML;
	losing = parseInt(losses);
	key = String.fromCharCode(event.keyCode).toLowerCase();
	if (key == letter) {
		document.getElementById("wins").innerHTML = score++;
		alert("You win!");
		randomizeLetters ();
	//If there are guesses left, the guesses left will count down, when the user guesses incorrectly.	
	} else if (integer > 0) {
		lettersGuessedArray.push(key);
		document.getElementById("guesses_left").innerHTMl = integer --;
		document.getElementById("guessed_letters").innerHTMl = lettersGuessedArray;
		alert("Wrong guess, try again!");
	} else {
		document.getElementById("losses").innerHTML = losing ++;
		alert("Sorry, you lost. Play again. Here's a new letter!");
		randomizeLetters();
		integer = 9;
			for (i = 0; i < lettersGuessedArray.length; i++) {
			lettersGuessedArray.splice(i);
			}
	}
	document.getElementById("guesses_left").innerHTML = integer;
	document.getElementById("guessed_letters").innerHTML = lettersGuessedArray;
	document.getElementById("wins").innerHTML = score++;
	document.getElementById("losses").innerHTML = losing++;
	console.log(key);
	console.log(lettersGuessedArray);
	console.log(letter);
	
}); 



