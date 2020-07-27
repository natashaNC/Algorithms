// Array: Quick Sort
// Create a function that modifies yesterday's partitionArray() to sort an array in-place. With yesterday's code plus a very few new lines, you will implement QuickSort! What are the run-time and space complexities of your quickSortArr implementation?

function partition(arr) {
    // const pV = arr[0]; //uses leftmost value
    const pV = arr[Math.floor(arr.length / 2)]; //uses mid-array value
    let [l, r] = [0, arr.length - 1]; //sets l, r pointers to firstmost and endmost array values

    while (l < r) {
        while (arr[l] < pV) {
            l++;
        }
        while (arr[r] > pV) {
            r--;
        }
        [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    console.log(`Pivot value is ${pV}`);
    console.log(`Post-partition array is ${arr}`);

    return pV;
}

partition([4, 1, 2, 5, 3, 6]);
// console.log(QuickSort([4, 1, 2, 5, 3, 6]));