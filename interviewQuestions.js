// (1) how would you determine if a number is an integer? 

function isInteger(num) {
	if (num - Math.floor(num) === 0) {
		return true;
	} else {return false}
}

//take any number as an argument and test whether there is difference
//between it and its Math.floored version. If the numbers decimal position is already
//0 there should be no difference between the two instances and thus, an integer

//(2) what will the following code output
(function() {
  var a = b = 5;
})();

console.log(b); //5

//(3) write a function that would allow multiply(5)(6);
function multiply(a) {
	return function(b) {
		return a * b;
	};
}
multiply(5)(6); //30

//(4) when would you use the bind() function?
	//the bind function would be used when you would like
	//to create a new bound function that maintains 
	//the reference of this in another object
//(5) what does 'use strict' do? 
	// use strict helps to write more safe code by throwing an error
	// when a new global variable is created
//(6) what is the difference between == and ===?
	// == performs type conversion and can pass some unintended instances as true
	// === does not perform type conversion and check that the values are the same type
	// === is a safer way to write code  == should only be used when type conversion
	// is intended
//(7) add your own method to array so that the following code works
var arr = [1, 2, 3, 4, 5];
var avg = arr.average();
console.log(avg);

Array.prototype.average = function() {
	var summary = 0;
	for(var i = 0; i < this.length; i++) {
		 summary = summary + this[i];
	} return summary / this.length;
};

//(10) how do you create a private variable? 
	//a private variable is created within a function and cannot be acceesssed from outside of the function 
	//without a helper function that returns the variable
	//the help function makes the function a closure
function private() {
	var secret = "password";
	return function() {
		return secret;
	};
}
var seepriv = private();
console.log(seepriv);


