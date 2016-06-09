function ExOh(str) {
  var oCounter = null;
  var xCounter = null;
    for(i = 0; i < str.length; i++) {
	  if (str.charAt(i) === 'x') {
        xCounter = xCounter += 1;
	  } else if(str.charAt(i) === 'o') {
		  oCounter = oCounter += 1;
		}
	}
	  if (xCounter === oCounter) {
	  return true;
	} else {
	  return false;
	}
}

//create a xCounter variable to track the number of xs
//create a oCounter variable to track the number of os
//iterate through the string and test for the presence of x or o and tally on the counters
   