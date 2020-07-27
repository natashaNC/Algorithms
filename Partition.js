//Sorts Array into values that are less than and greater than the partition values, values on either side of the partition are NOT sorted

function partition(arr) {
    const pV = arr[0];
    let [l, r] = [0, arr.length - 1];

    while (l < r) {
        while (arr[l] < pV) {
            l++;
        }
        while (arr[r] > pV) {
            r--;
        }
        [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    return l;
}

console.log(partition([4, 1, 2, 5, 3, 6]));