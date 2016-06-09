// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];
var reduce = function(arr, callback, initialValue) {
  var counter, currentValue;
  if(arr.length < 1) {
    return arr
  } else {
    if(arguments.length === 2) {
      counter = 1;
      currentValue = arr[0];
    } else if (arguments.length >= 3) {
    counter = 0;
    currentValue = initialValue;
    } else {
      throw "invalid args"
    } 
  }
  for (counter = counter; counter < arr.length; counter++) {
    currentValue = currentValue + callback(arr[counter], currentValue)
  }
  return currentValue
}
Array.prototype.reduce = function(combiner, initialValue) {
	var counter,
		accumulatedValue;

	// If the array is empty, do nothing
	if (this.length === 0) {
		return this;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		}
		else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}

		// Loop through the array, feeding the current value and the result of
		// the previous computation back into the combiner function until
		// we've exhausted the entire array and are left with only one value.
		while(counter < this.length) {
			accumulatedValue = combiner(accumulatedValue, this[counter])
			counter++;
		}

		return [accumulatedValue];
	}
};
		