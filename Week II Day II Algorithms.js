Week II Day II Algorithms
Objects
Key: Value pair
Defined by {}
for in loop
Part One




var zipArr = {};

function zipArrays(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        zipArr[arr1[i]] = arr2[i];
    }
    return zipArr;
}

zipArrays(['a', 'b', 'c'], [1, 2, 3])




var tempobj = {};

function invertHash(obj) {
    for (var key in obj) {

        newobj[obj[key]] = key;
    }
    return newobj;
}

newobj {};




Part Two

function invertHash(obj) {}
I => {
    'a': 'x',
    'b': 'y',
    'c': 'z'
}
O => {
    'x': 'a',
    'y': 'b',
    'z': 'c'
}