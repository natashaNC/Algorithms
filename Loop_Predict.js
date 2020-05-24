for (var num = 0; num < 15; num++) {
    console.log(num);
}

Predicted values of console.log: all numbers 0 - 14. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
Predicted values of num: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15


for (var i = 1; i < 10; i += 2) {
    console.log('I =', i)
    if (i % 3 == 0) {
        console.log(i);
    }
}
Predicted values of i: 1, 3, 5, 7, 9, 11
Predicted console.log values: values of i, less than 10, divisible by 3: 3, 9

for (var j = 1; j <= 15; j++) {
    if (j % 2 == 0) {
        j += 2;
    } else if (j % 3 == 0) {
        j++;
    }
    console.log(j);
}

Predicted values of j: 1, 2, 4, 5, 6, 8, 9, 10, 11, 12, 14, 15, 16, 17
Predicted values of console.log: 1, 4, 5, 8, 10, 11, 14, 16