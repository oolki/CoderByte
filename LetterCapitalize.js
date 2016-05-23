function LetterCapitalize(str) { 
  var aRay = [];
  for (i = str.length - 1; i >= 0; i--) {
    if (str.charAt(i) === ' ') {
      aRay.unshift(str.slice(i + 1));
      str = str.slice(0, i);
    }
  }
  aRay.unshift(str);
  for (i = 0; i < aRay.length; i++){
    aRay[i] = aRay[i].charAt(0).toUpperCase() + aRay[i].slice(1);
  } 
  str = aRay.join(' ');
  return str; 
}

//capitalize this first letter in the string
//catalogue the positions of each space within string
//iterate over string, if space, remove word one position tot he right
//iterate over array targeting the first first letter of each word --> capitalize 
//join the elements of the array as a space delimited string
