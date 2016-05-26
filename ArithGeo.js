function ArithGeo(arr) { 
    var  multiplier = arr[1] / arr[0] ;
    var geoCounter = 0;
    var ariCounter = 0;
    
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] === arr[i] * multiplier) {
            geoCounter++;
            if (geoCounter === arr.length - 1) {return 'Geometric'} 
        }
        if (arr[i + 1] - arr[i] === arr[1] - arr[0]) {
            ariCounter++;
            if (ariCounter === arr.length - 1) {return 'Arithmetic'}
            continue;
        } else { return -1}
    }
}
//[5, 10, 15, 20, 25, 30] returns arithmetic
//since the pattern can in the first positions appear geometric but truly be arithmetic
//all positions of the array must be tested. 

console.log(ArithGeo([2,6,18]))