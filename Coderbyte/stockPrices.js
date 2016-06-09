function stockPrice(arr) {
	buyPrice = 0;
	sellPrice = 0;
	maxProfit = -1; 
  var changeBuyIndex = true;
  // this allows our loop to keep iterating the buying
  // price until a cheap stock price is found
  for (var i = 0; i < arr.length - 1; i++) {


  	sellPrice = arr[i + 1];

  	if (changeBuyIndex) {
  		buyPrice = arr[i];
  	}
    if (sellPrice < buyPrice) {
      change_buy_index = true; 
      continue;
    } else {
  	var tempProfit = sellPrice - buyPrice;
  	if (tempProfit > maxProfit) {maxProfit = tempProfit; }
  	changeBuyIndex = false;
    }
  }
  return maxProfit;
}