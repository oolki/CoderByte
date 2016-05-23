function FirstReverse(str) { 
  var reverseString = '';
    for (i = str.length - 1; i >= 0; i--) {
      reverseString = reverseString + (str.charAt(i));
    }
  str = reverseString;
  return str; 
}

//create a function to take one argument
//create a placeholder variable
//iterate over the length of the string  from back to front
//assign each charAt(i) to the beginning of the placeholder
//set string to the placeholder
//return str