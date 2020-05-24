function a() {
    return 35;
}
console.log(a())

Predicted output: 35


function a() {
    return 4;
}
console.log(a() + a());

Predicted output: 8

function a(b) {
    return b;
}
console.log(a(2) + a(4));

Predicted output: 6

function a(b) {
    console.log(b);
    return b * 3;
}
console.log(a(3));


Predicted output: 3
Predicted output: 9


function a(b) {
    return b * 4;
    console.log(b);
}
console.log(a(10));

Predicted output: 40
Console.log statement inside of function is not executed because it is after the
return statement


function a(b) {
    if (b < 10) {
        return 2;
    } else {
        return 4;
    }
    console.log(b);
}
console.log(a(15));


Predicted output: 4
Console.log statement inside of function is not executed because it is after the
return statement


function a(b, c) {
    return b * c;
}
console.log(10, 3);
console.log(a(3, 10));

Predicted output: 10, 3
Predicted output: 30


function a(b) {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

Predicted output: 3
Predicted output: 4

function a() {
    for (var i = 0; i < 10; i++) {
        i = i + 2;
        console.log(i);
    }
}
a();

Predicted output: 2, 5. 8, 11


function a(b, c) {
    for (var i = b; i < c; i++) {
        console.log(i);
    }
    return b * c;
}
a(0, 10);
console.log(a(0, 10));

Predicted output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Predicted output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Predicted output: 0


function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(j);
        }
        console.log(i);
    }
}
Since the

function is not called, there is no output.If the

function were called, below is the predicted output:
    Predicted output j: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Predicted output j: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Predicted output j: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Predicted output j: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Predicted output j: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Predicted output j: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Predicted output j: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Predicted output j: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Predicted output j: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Predicted output j: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Predicted output i: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9


function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(i, j);
        }
        console.log(j, i);
    }
}

Since the

function is not called, there is no output.If the

function were called, below is the predicted output:
    Predicted output i, j: 0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9
Predicted output j: 1, 0, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9
Predicted output j: 2, 0, 2, 1, 2, 2, 2, 3, 2, 4, 2, 5, 2, 6, 2, 7, 2, 8, 2, 9
Predicted output j: 3, 0, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 3, 7, 3, 8, 3, 9
Predicted output j: 4, 0, 4, 1, 4, 2, 4, 3, 4, 4, 4, 5, 4, 6, 4, 7, 4, 8, 4, 9
Predicted output j: 5, 0, 5, 1, 5, 2, 5, 3, 5, 4, 5, 5, 5, 6, 5, 7, 5, 8, 5, 9
Predicted output j: 6, 0, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7, 6, 8, 6, 9
Predicted output j: 7, 0, 7, 1, 7, 2, 7, 3, 7, 4, 7, 5, 7, 6, 7, 7, 7, 8, 7, 9
Predicted output j: 8, 0, 8, 1, 8, 2, 8, 3, 8, 4, 8, 5, 8, 6, 8, 7, 8, 8, 8, 9
Predicted output j: 9, 0, 9, 1, 9, 2, 9, 3, 9, 4, 9, 5, 9, 6, 9, 7, 9, 8, 9, 9
Predicted output j, i: 0, 9, 1, 9, 2, 9, 3, 9, 4, 9, 5, 9, 6, 9, 7, 9, 8, 9, 9, 9



var z = 10;

function a() {
    var z = 15;
    console.log(z);
}
console.log(z);

Predicted output: 10
Since the

function is not called, there is no output from the

function, If the
function were called, the predeicted output would be 15.


var z = 10;

function a() {
    var z = 15;
    console.log(z);
}
a();
console.log(z);

Predicted output of console.log(z) in function a: 15
Predicted output of console.log(z) outside of function: 10

var z = 10;

function a() {
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

Predicted output - console.log: 15

Predicted output - console.log(z): 15