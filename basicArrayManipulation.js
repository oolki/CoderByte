//(1) 
var arr = [1, 3, 5, 7, 9];
//(2)
for (i = 0; i < arr.length; i++) {
	arr[i];
}	 
//(3)
function timesTwo(a) {
	return a * 2;
}
//(4)
var arrTimesTwo = [];
for (i = 0; i < arr.length; i++) {
	arrTimesTwo.push(timesTwo(arr[i]));
}	 
//(5)
var obj = {};
for (var i = 0; i < arr.length; i++) {
  var originalValue = arr[i];
  var doubleResult = timesTwo(arr[i]);
  obj[originalValue.toString()] = doubleResult;

} 
// (1) Create an array of numbers and save the array to a variable
// (2) Iterate through the array using a loop
// (3) Create a function that will multiply each number in the array by two
// (4) Pass each number in the array to this function
// (5) Save the original numbers and the doubled results as key-value pairs in an object
