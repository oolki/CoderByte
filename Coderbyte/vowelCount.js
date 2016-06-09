function VowelCount(str) { 
  var counter = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < str.length; i++){
    if(vowels.indexOf(str.charAt(i)) >= 0) {
      counter++;
    }
  }return counter; 
}
//create a placeholder variable to count the number of vowels
//create an array with vowels as its elements
//iterate over the string and check for vowels at each character
//if if there exists a vowel at the a position in the string
//add one to the counter
//return the number of vowels counted within the string