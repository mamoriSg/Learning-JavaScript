var some = 5;

function arrSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
        sum += arr[i];

    console.log(some);
    return sum;
}
var arr1 = [5, 3, 2, 2];
var res1 = arrSum(arr1); 

var arr2 = [5, 3, 2, 2, 10];
var res2 = arrSum(arr2);

if (res1 > res2) console.log(res1);
else console.log(res2);