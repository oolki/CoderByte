function AlphabetSoup(str) { 
  var arr = [];
    for(i = 0; i < str.length; i++) {
      arr.push(str.charAt(i));
    }
  arr = arr.sort();
  str = arr.join('');
  return str; 
}
//create a function AlphabetSoup that takes one argument as its input
//create a placeholder array
//iterate over the string, pushing each character to an element in the placeholder array
//sort the array
//join the array back into string form and return the result
   