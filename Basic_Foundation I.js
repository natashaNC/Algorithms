Get 1 to 255 - Write a

function that returns an array with all the numbers from 1 to 255.


function x(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {

        arr.push(i);
    }
    return arr;
}
console.log(x(255));


Get even 1000 - Write a

function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator
for this exercise.

function x() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(x());


Sum odd 5000 - Write a

function that returns the sum of all the odd numbers from 1 to 5000.(e.g .1 + 3 + 5 + ...+4997 + 4999).

function x() {
    var sum = 0;
    for (var i = 1; i < 5000; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }

    }
    return sum;
}
console.log(x());

Iterate an array - Write a

function that returns the sum of all the values within an array.(e.g. [1, 2, 5] returns 8.[-5, 2, 5, 12] returns 14).

function x(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;

}
var y = [1, 2, 5]

console.log(x(y));

Find max - Given an array with multiple values, write a

function that returns the maximum number in the array.(e.g.for[-3, 3, 5, 7] max is 7)

function x(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > temp) {
            temp = arr[i];
        }

    }
    return temp;
}
var y = x([-3, 3, 5, 7]);
console.log(y);

Find average - Given an array with multiple values, write a

function that returns the average of the values in the array.(e.g.for[1, 3, 5, 7, 20] average is 7.2)

function x(arr) {
    var average = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        sum = sum + arr[i];
    }
    average = sum / arr.length;
    return average;
}

var y = x([1, 3, 5, 7, 20]);
console.log(y);

Array odd - Write a

function that would
return an array of all the odd numbers between 1 to 50.(ex. [1, 3, 5, ...., 47, 49]).Hint: Use 'push'
method.

function x() {
    var arrNew = [];
    for (var i = 1; i < 50; i++) {

        if (i % 2 == 1)
            arrNew.push([i]);

    }
    return arrNew;
}

console.log(x());



Greater than Y - Given value of Y, write a

function that takes an array and returns the number of values that are greater than Y.For example
if arr = [1, 3, 5, 7] and Y = 3, your

function will
return 2.(There are two values in the array greater than 3, which are 5, 7).

function x(arr, Y) {
    var greaterthanY = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            greaterthanY++;
        }


    }
    return greaterthanY;
}

console.log(x([1, 3, 5, 7], 3));


Squares - Given an array with multiple values, write a

function that replaces each value in the array with the value squared by itself.(e.g. [1, 5, 10, -2] will become[1, 25, 100, 4])

function x(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(x([1, 5, 10, -2]));


Negatives - Given an array with multiple values, write a

function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values.(e.g. [1, 5, 10, -2] will become[1, 5, 10, 0])

function x(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}


Max / Min / Avg - Given an array with multiple values, write a

function that returns a new array that only contains the maximum, minimum, and average values of the original array.(e.g. [1, 5, 10, -2] will
    return [10, -2, 3.5])

var max = 0;
var min = 0;
var avg = 0;
var sum = 0;

function x(arr) {
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];


        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }

    }

    avg = sum / arr.length;
    return [max, min, avg];
}

console.log(x([1, 5, 10, -2]));



Swap Values - Write a

function that will swap the first and last values of any given array.The
default minimum length of the array is 2.(e.g. [1, 5, 10, -2] will become[-2, 5, 10, 1]).

var temp = 0;

function x(arr) {
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    console.log(arr);

    return arr;
}

console.log(x([1, 5, 10, -2]));


Number to String - Write a

function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.For example
if array = [-1, -3, 2], your

function will
return ['Dojo', 'Dojo', 2].

function x(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
    return arr;

}
console.log(x([-1, -3, 2]));