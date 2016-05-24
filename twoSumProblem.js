//two sum problem
	//create a function that takes two arguments : a number
	//and a desired sum 
	//create a placeholder array
	//iterate over the array to determine if the sum of any two values
	//is equal to the desired sum
function twoSum(arr, S) {
	sum = [];
	for (i = 0; i < arr.length; i++) {
		for(j = i + 1; j < arr.length; j++) {
			if(arr[i] + arr[j] === S) {
				sum.push([arr[i], arr[j]]);
			}
		}
	}
	return sum;
} 