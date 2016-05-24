function FirstFactorial(num) { 
  Factorial = num;
    for (i = num - 1; i >= 1; i--) {
        Factorial = (Factorial * i);
    }
    num = Factorial;
  return num; 
}

//create a function FirstFactorial that accepts one argument
//set the placeholder Factorial to the input argument
//iterate from one less than the input to one and set the placeholder 
//equal to itself multiplied by the iteration step
//set the input argument  to the resulting placeholder
//return input argument
   