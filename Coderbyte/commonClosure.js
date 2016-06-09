//Common Closure

function counter() {
  var count = 0;
  return {
    add: function(amount) {
      count += amount;
    },
    displayCount: function() {
      return 'the count is currently: ' + count;
    }
  };
}
var c = counter();

c.add();
c.displayCount();
//create a function counter and take create a variable placeholder
//have the function return an object that allow you
//to modify the variable placeholder
//now create a variable to hold the function counter()
//and call on its object's methods


function makeAdder(x) {
  debugger;
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


var me = 'Bruce Wayne'
function greetMe() {
  console.log('Hello, ' + me + '!')
}
greetMe() 

function sendRequest() {
  debugger;
  var requestID = '123'
  $.ajax({
    url: '/myUrl',
    success: function(response) {
      alert('Request ' + requestID + ' returned')
    }
  });
}