function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var minPos = i;
        for (var j = i; j < arr.length; j++) {
            if (arr[j] < arr[minPos]) {
                minPos = j;
            }
        }
        [arr[i], arr[minPos]] = [arr[minPos], arr[i]];
    }
    return arr
}



console.log(selectionSort([9, 7, 1, 2, 5, 4, 18, 4, 54, 2, 5, 9]))