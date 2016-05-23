function SimpleAdding(num) { 
  var array = [];
  var answer = 0;
    for (i = 0; i <= num; i++) {
      array.push(i);   
      }
    for  (i = 0; i <array.length; i++) {
      answer = answer + array[i];
      }
  num = answer;  
  return num; 
}
//create a function called SimpleAdding that takes one argument
//create a placeholder array and an answer placeholder
//populate the array with an element for each whole number between the input and zero
//capture the sum of each element of the array in the answer placeholder
//return the sum of all elements of the array