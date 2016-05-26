function letterCounter(str) {
  var words = str.split(" ");
  var table = {};

  for(i = 0; i < words.length; i++) {
  	var selectWord = words[i];
  	table[selectWord] = {};
  	table[selectWord]['highest'] = 0;

  	for(j = 0; j < selectWord.length; j++ ) {
  		selectChar = selectWord[j];
  		if (table[selectWord][selectChar] === undefined) {
  			table[selectWord][selectChar] = 1;
  		} else {
          table[selectWord][selectChar] += 1;
        }

  	  if (table[selectWord][selectChar] > table[selectWord]['highest']) {
  	  	 table[selectWord]['highest'] = table[selectWord][selectChar];
  	  }

  	}
  }
  var highestCount = {word: "null", count: 1};   
  for (var w in table) {
    if (table[w]['highest'] > highestCount["count"]) {
  	  highestCount["word"] = w;
  	  highestCount["count"] = table[w]['highest'];
    }
  }
  if(highestCount['count'] > 1) {
    return highestCount['word'];
  } else return -1
}

//set var to split string into array of words
//create an empty object to measure the number of times a char occurs
//loop through array of words
//create new entry  in object table with the key being this words
//create a key value pair that will store highest letter count
//for each word
//loop through each character in word and store number of times
//each letter appears
//if character already exists in table for the word add 1 to count
//else set count to 1

//update the highest letter count for each new letter in the iteration
//setup a new object that will store the word with
//the highest number of repeating characters

// now determine what word has the highest number
// of repeating letters by accessing the highest property of each words

