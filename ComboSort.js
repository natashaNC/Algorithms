//Assumes both arrays given are already sorted - re-write to sort arrays seperately before combining


function comboSort(arr1, arr2) {
    let newarr = []
    let j = 0
    let i = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            newarr.push(arr2[j])
            j++
            // If arr2 is out of positions to be pushed, push the remaining arr1 positions
            if (j === arr2.length) {
                while (i < arr1.length) {
                    newarr.push(arr1[i])
                    i++
                }
            }
        } else {
            newarr.push(arr1[i])
            i++
            // If arr1 is out of positions to be pushed, push the remaining arr2 positions
            if (i === arr1.length) {
                while (j < arr2.length) {
                    newarr.push(arr2[j])
                    j++
                }
            }
        }
    }
    return newarr
}

console.log(comboSort([1, 2, 3, 9, 11], [4, 5, 6, 15, 18, 27]))

//currently creates an infinite loop
function combineArrays(a, b) {
    let [i, j] = [0, 0];
    const c = [];
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            c.push(a[i++]);
        } else {
            c.push(b[j++]);
        }
    }
    for (; i < a.length; i++) {
        c.push(a[i]);
    }
    for (; i < b.length; j++) {
        c.push(b[j]);
    }
    return c;
}



//finish this algo
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const left = arr.slece(0, Math.floor(arr.length / 2));
    const right = arr.slice(Math.floor(arr.length / 2), arr.legth);
}