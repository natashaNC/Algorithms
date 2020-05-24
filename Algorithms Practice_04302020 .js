Week II Day VI Algorithms
Array: Remove Negatives

function RemoveNegs(arr) {
    console.log('Original array', arr);
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {
            arr.splice(i, 1);
        }
    }
    console.log('New array', arr);
    return arr;
}
RemoveNegs([4, -2, 7, 1, 3, 8, -5]);


Array: SkyLine Heights

function SkyLineHeights(arr) {
    console.log('Original array', arr);
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < arr[i - 1]) {
            arr.splice(i, 1);
        }
    }
    console.log('New array', arr);
    return arr;
}
I => SkyLineHeights([4, 2, 7, 8, 5])
O => [4, 7, 8]




Array: Nth - Largest

function NthLargest(arr, n) {
    console.log('Original array', arr);
    arr.sort();
    console.log('Sorted array', arr);
    console.log(arr[arr.length - n]);
    return arr[arr.length - n];
}

I => NthLargest([9, 4, 2, 1, 3, 5, 7], 3)
O => 5