// function InsertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j--) {

//             if (arr[j] < arr[j - 1]) {
//                 [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
//             } else {
//                 break
//             }

//         }
//     }
//     return arr
// }

// console.log(InsertionSort([6, 2, 5, 3, 1]))

function InsertionSort(arr) {
    var i = 1
    while (i < arr.length) {
        var j = i
        while (j < arr.length) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            } else {
                break
            }
            j--
        }

        i++
    }
    return arr
}

console.log(InsertionSort([6, 2, 5, 3, 1]))