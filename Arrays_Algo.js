var testArr = [6, 3, 5, 1, 2, 4]
Print each array value and the sum so far
The expected output will be:
    var testArr = [6, 3, 5, 1, 2, 4];
var sum = 0;
for (var i = 0; i < testArr.length; i++) {

    console.log('Num', testArr[i]);
    var sum = sum + testArr[i];
    console.log('Sum', sum);
}





Multiply each value in the array by its array position
The expected output will be:

    var testArr = [6, 3, 5, 1, 2, 4];
var Multiply = 0;
for (var i = 0; i < testArr.length; i++) {

    Multiply = testArr[i] * [i];
    console.log(Multiply);
}