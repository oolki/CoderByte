//map creates a new array by iterating over the existing array and applying
// a function to each element

//create a list of birthdays
//create a new bday variable that uses map to iterate over the strings 
//return and convert the structure from '-' to '/' seperated
var bdays = ['8-12', '9-12', '10-12', '10-21']

var bdays2 = bdays.map(functon(char) {
	return char.replace('-','/');
});

//reduce applies a function to all elements of an array and reduces it to a single value
//which accumulates information from the array
//reduce takes four arguments (initialvalue, elementvalue, currentindex, originalarray)

//the filter function creates a new array consisting of all of the elements of an 
// array that pass a test
//the function for filter takes in a single value which is the element on the array