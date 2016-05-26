function ABCheck(str) { 
  for (var i = 0; i < str.length; i++) {
    if(str[i] === 'a' && str[i + 4] === 'b') {
      return true;
    }else if(str[i] === 'b' && str[i + 4] === 'a') {
      return true;
    }
  }return false;
}
//create a function ABCheck that takes one string argument as an input
//iterate of the length of the string checking for both 'a' and 'b' 3 characters apart
//else checking for 'b' and 'a' 3 characters apart, ordering is irrelevant
//else the test fails and return false. 

console.log(ABCheck("This is Hello World."))