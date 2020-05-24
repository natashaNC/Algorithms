Given an array and a value Y, count and print the number of array values greater than Y.

function x(arr, Y) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            counter++;
        }
    }
    console.log('The number of array values greater than', Y, 'is', counter);
}
x([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);

Given an array, print the max, min and average values
for that array.
function x(arr) {
    var min = 0;
    var max = 0;
    var avg = 0;

    for (var i = 0; i < arr.length; i++) {

        avg += arr[i];
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    avg = avg / arr.length;
    console.log('The max is', max, 'the min is', min, 'and the average is', avg, '.');
}
x([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


Given an array of numbers, create a

function that returns a new array where negative values were replaced with the string‘ Dojo’.For example, replaceNegatives([1, 2, -3, -5, 5]) should
return [1, 2, "Dojo", "Dojo", 5].

function x(arr) {
    var newArr = [];
    console.log('Original array', arr);

    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        if (newArr[i] < 0) {
            newArr[i] = "Dojo";
        }
    }
    console.log('New array', newArr);
    return newArr;
}
x([1, 2, -3, -5, 5]);

Given array, and indices start and end, remove values in that index range, working in -place(hence shortening the array).For example, removeVals([20, 30, 40, 50, 60, 70], 2, 4) should
return [20, 30, 70].

function removeVals(arr, start, end) {
    console.log('Original Array', arr);
    arr.splice(start, end - start + 1);

    console.log('New Array', arr);
}
removeVals([20, 30, 40, 50, 60, 70], 2, 4);