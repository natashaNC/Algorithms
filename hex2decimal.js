const helper = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "a": 10,
    "b": 11,
    "c": 12,
    "d": 13,
    "e": 14,
    "f": 15,
}

function hexiFunction(hexStr) {
    var currentValue = 0
    var result = 0
    var powerOf = 16

    for (let i = hexStr.length - 1; i > 1; i--) {
        for (key in helper) {
            if (hexStr[i] === key) {
                currentValue = helper[key]
                break
            }
        }
        result += currentValue * Math.pow(powerOf, hexStr.length - 1 - i)
    }
    console.log(result)
}

hexiFunction("0x3c") // should give us 60

