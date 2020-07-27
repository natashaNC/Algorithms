//Array: Bubble Sort
// For review, create a function that uses BubbleSort to sort an unsorted array in-place.

function bubbleSort(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([9, 7, 1, 2, 5, 4, 18, 4, 54, 2, 5, 9]))