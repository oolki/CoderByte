function DivisionStringified(a,b) { 
  var stringQuotient = function divide(a, b) {
  	var quotient = Math.round(a / b);
    return quotient.toString();
  };
  target = stringQuotient(a,b);
  var output = target;
  for (var i = target.length - 3; i > 0; i -= 3) {
  		output = [output.slice(0, i), ",", output.slice(i)].join('');
  	}
  	return output;
  }
console.log(DivisionStringified(1000000000000000, 2));

