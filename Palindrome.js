function Palindrome(str) {
  for(i = 0; i < Math.ceil(str.length) / 2; i++) {
  	leftValue = str.charAt(i);
  	rightValue = str.charAt(str.length - 1 - i);
  	if (leftValue != rightValue) {
  		return false;
  	}
  }
  return true;
}


Palindrome('racecar');



//create a function palindrome that accepts on string argument and returns the value true if it is a palindrome
//iterate over the string targeting the first value, saving it, and then targeting the last value and comparing
//move one position inward torward the center and test equality again
// otherwise return false

// Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 