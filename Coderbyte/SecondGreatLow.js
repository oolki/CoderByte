function SecondGreatLow(arr) { 
	arr.sort(function(a, b){
		return a - b;
	});
var uniqArray = purifyArray(arr);
var uniqLength = uniqArray.length;

return uniqArray[1] + " " + uniqArray[uniqLength - 2];

function purifyArray(arr) {
  var arrLen = arr.length;
  var output = [];
  var testobj = {};
  var placeHolder = 0;
  for (i = 0; i < arrLen; i++){
  	placeHolder = arr[i];
  	if(output.indexOf(placeHolder) < 0) {
  		output.push(placeHolder);
  	}
  } 
  return output;
 }         
}
console.log(SecondGreatLow([-1, 1, 1 ,3, -3, 4, 5, ,5, 2]))

// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr 
// and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr
//  contains [7, 7, 12, 98, 106] the output should be 12 98. 
// The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 
// Sample Test Cases

