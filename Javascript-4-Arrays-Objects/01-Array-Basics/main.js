// ---------------------------
// Array Basics
// ---------------------------
// We have an array. We want to programmatically get to its values and do something with them.
var characters = ['Fry', 'Leela', 'Bender', 'Professor', 'Zapp', 'Zoidburg'];

////////////////////////////////////////////////////////
// 1. Console.log each value in the console individually.
console.log('Each character being logged individually:');
console.log(characters[0]);
console.log(characters[1]);
// ADD YOUR CODE HERE:



////////////////////////////////////////////////////////
// 2. Instead of manually selecting the items, loop through them and console.log the values.
for( var i = 0; i < characters.length; i++ ){
	// ADD YOUR CODE HERE to console.log the character name we are up to:
}

////////////////////////////////////////////////////////
// 3. Loop through the array using a while() loop and console log each item:
// ADD YOUR CODE HERE to make a while() loop and console log each item:



////////////////////////////////////////////////////////
// 4. Display the results to the user.
// Hint : Build a string and display each character name in a unordered list.
// use a for loop to complete this task

var output = '';
for( var i = 0; i < characters.length; i++ ){
	// ADD YOUR CODE here to build your HTML output string
}

// ADD YOUR CODE HERE to display the final result in the <ul> element whose class is 'characterNames'.
