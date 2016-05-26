function ArrayAdditionI(arr) { 
     var target;
    var addArr = arrayPrep(arr);
    var len = addArr.length;
    var permNum = Math.pow(2, len);
    console.log('test0 ', permNum, target, addArr);

    for(var i = 0; i <= permNum; i++) {
        permStr = (i).toString(2);
        strlen = permStr.length;
        var counter = 0;
        for(var j = 0; j < strlen; j++) {
            if(permStr[j] === '1') {
                counter += addArr[j];
            }
        }
        if (counter === target) {
            return true
        }
    }
    return false

    function arrayPrep(arr2) {
        arr.sort(function(a, b){
            return a - b
        });
        target = arr2.pop()
        return arr2
    }
}
   