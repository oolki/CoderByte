function CheckNums(num1,num2) { 
    if(num2 > num1) {
        return true;
    }else if(num2 === num1) {
        return '-1';
    }else {
        return false;
    }
}
//test whether the first number is less then the second number
//return true if the test passes and false if it fails. 
//else if they are equal, return the string -1
