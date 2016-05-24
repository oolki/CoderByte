function TimeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    num = hours + ':' + minutes;
  return num; 
}
//create a function that takes one argument as input
//create a placeholder for hours use math to calculate hour units
//create a placeholder for minutes and find remainder from hour units
//join the hours and minutes calculations with ":" for output
   