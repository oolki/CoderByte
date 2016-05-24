var longestWord = function(sen) {
  var array = [];
  sen = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    for (i = sen.length - 1; i >= 0; i--) {
      if (sen.charAt(i) === ' ') {
        array.push(sen.slice(i + 1));
        sen = sen.slice(0, i);
    }
  }
  array.push(sen);
  lengthiest = array[array.length - 1];
    for (i = array.length - 1; i >= 0; i--) {
      if ( array[i].length > lengthiest.length) {
        lengthiest = array[i];
      }
    }
  sen = lengthiest;
  return sen;
};
  //create a function longestWord that takes one arguement
  //create an array as a placeholder
  //scan the input for any puncation and replace with ''
  //find all all words by detecting spaces and push the word to the array for evaluation
  //set the string to the remainder of the string yet to be evaluated
  //push the remaining 'spaceless' first word to the array
  //set placeholder to last position on the array --> the first word from the string
  //test against lengthiest for longer strings moving torward the front of the array
  //ensuring that the first longest is the returned longest. 
