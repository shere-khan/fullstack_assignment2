function doGame() {
	colorArray = [ "blue", "cyan", "gold", "gray", "green", "magenta",
			"orange", "red", "white", "yellow" ];
	randomIndex = Math.floor(Math.random() * (colorArray.length + 1));
	console.log(randomIndex);
	randomColor = colorArray[randomIndex];
	console.log(randomColor);
	var promptText = "I am thinking of one of these colors\n\nblue, cyan, gold, gray, green"
			+ ", magenta, orange, red, white, yellow\n\nWhat color am I thinking of?";
	while (true) {
		guess = prompt(promptText);
		if (guess == "") {
			guess = prompt(promptText);
			alert("You must enter a value");
		} else if (checkGuess(guess)) {
			break;
		}
	}
	// generate number
	// while loop that repeats until player gets answer
}

function checkGuess(guess) {
	if (colorArray.indexOf(guess) == -1) {
		alert("Sorry, I don't recognize your color");
		return false;
	}
	switch (guess.localeCompare(randomColor)) {
	case -1:
		alert("Sorry, your guess is alphabetically lower");
		return false;
	case 1:
		alert("Sorry, your guess is alphabetically higher");
		return false;
	default:
		alert("You guessed correctly!");
		return true;
	}
}