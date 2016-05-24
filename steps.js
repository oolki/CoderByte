function stepCounter(N) {
	if (N === 1) {return 1}
	if (N === 2) {return 2}
	return stepCounter(N - 1) + stepCounter(N - 2);
}
stepCounter(6);

function countDownFrom(num) {
	if(num === 0) return;
	console.log(num);
	countDownFrom(num - 1);


}

countDownFrom(10)