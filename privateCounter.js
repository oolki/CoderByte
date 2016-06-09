var counter = function() {
	var counterVar = 0;

	function changeCounter(num) {
		counterVar = counterVar += num;
	}
	return {
		increment: function () {
			changeCounter(1);
			return console.log('successfully added one to value');
		}, 
		decrement: function () {
			changeCounter(-1);
			return console.log('successfully reduced value by one');
		},
		seeValue: function() {
			return counterVar
		}
	}
}();

console.log(counter.increment());
