Week II Day V Algorithms
Array: Shuffle Arr

function shuffle(arr) {}
I => shuffle([4, 7, 2, 1, 9])
0 => [7, 9, 2, 1, 4] **
    *
    Hint ** *
    This will
return a random number between 0(inclusive) and 5(exclusive)
Math.floor(Math.random() * 5)

function shuffle(arr) {
    for (i = 0; i < 30; i++) {


        arr[pos2] = swap1;

    }
    Math.floor(Math.random() * 5)


    console(arr);
    return arr;
}




Array: Remove Duplicates(sorted array)

functioin removeDups(arr) {}
I => [1, 2, 2, 4, 5, 5, 6, 6, 6, 7, 7, 8]
0 => [1, 2, 4, 5, 6, 7, 8]

function removeDups(arr) {
    var dirty = 1;
    while
    console.log('Original arr', arr);
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 1);
        }
    }
    console.log('New arr', arr);
    return arr;
}

removeDups([1, 2, 2, 4, 5, 5, 6, 6, 6, 7, 7, 8]);




Array: Remove Range

function removeRange(arr, start, end) {}
I => removeRange([20, 30, 40, 50, 60, 70], 2, 4)
0 => [20, 30, 70]

function removeRange(arr, start, end) {
    console.log('Original Array', arr);
    arr.splice(start, end - start + 1);

    console.log('New Array', arr);
}
removeRange([20, 30, 40, 50, 60, 70], 2, 4);