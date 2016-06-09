function CountingMinutesI(str) {
 //"10:00am-10:00pm"
    var times = str.split("-");
    var time1 = times[0].split(":");
    var time2 = times[1].split(":");
    var hour1 = Number(time1[0]);
    var hour2 = Number(time2[0]);
    var minute1 = Number(time1[1].slice(0,2));
    var minute2 = Number(time2[1].slice(0,2));
    var meridiem1 = time1[1].slice(2,4);
    var meridiem2 = time2[1].slice(2,4);
    
    if (meridiem1 === 'pm' && hour1 != 12) {
        hour1 = hour1 + 12;
     }
    
    if (meridiem2 === 'pm' && hour2 != 12) {
        hour2 = hour2 + 12;
     } 
    if (meridiem1 === 'am' && hour1 == 12) {
        hour1 = 0;
     }
    if (meridiem2 === 'am' && hour2 == 12) {
        hour2 = 0;
     }
        var firstTime = hour1 * 60 + minute1;
        var secondTime = hour2 * 60 + minute2;
        var timeDifference = secondTime - firstTime;
        if (timeDifference < 0) {timeDifference = timeDifference + 60*24}
    
    return timeDifference;   
}
//     antePostMeridiemSplit = splitArray.map(function(elem) {
//     	return elem.slice(5)

//     })
//     timeArray = splitArray.map(function(elem) {
//     	antePostMeridiemSplit = splitArray.map(function(elem) {
    	
//     	return elem.slice(5)

//     })

//     	return elem.slice(0,5)

//     })

//     return timeArray; 
         
// }
