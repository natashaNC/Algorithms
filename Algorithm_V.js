Algorithm V

Return the given array, after setting any negative values to zero.For example resetNegatives([1, 2, -1, -3]) should
return [1, 2, 0, 0].

function resetNegatives(arr) {
    console.log('Original array', arr);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log('Updated array', arr);
    return arr;
}
resetNegatives([1, 2, -1, -3]);


Given an array, move all values forward by one index, dropping the first and leaving a‘ 0’ value at the end.For example moveForward([1, 2, 3]) should

function moveForward(arr) {
    arr.splice(0, 1);
    arr.push(0);
    console.log(arr);
}
moveForward([1, 2, 3]);

Given an array,
return an array with values in a reversed order.For example, returnReversed([1, 2, 3]) should
return [3, 2, 1].

function returnReversed(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log('New array', newArr);
    return newArr;
}
returnReversed([1, 2, 3]);


Create a

function that changes a given array to list each original element twice, retaining original order.Have the

function
return the new array.For example repeatTwice([4, ”Ulysses”, 42, false]) should
return [4, 4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function listTwice(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i], arr[i]);

    }
    console.log(newArr);
    return newArr;
}
listTwice([4, ”Ulysses”, 42, false]);