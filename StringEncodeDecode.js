function encode(string) {
    newString = ""
    var count = 0
    for (var i = 0; i < string.length; i++) {

        if (string[i] === string[i + 1]) {
            count++
        } else {
            count++
            newString += string[i] + String(count)
            count = 0
        }
    }
    return newString
}

console.log(encode('happy'))

function decode(string) {
    var decodedString = ""

    for (var i = 0; i < string.length; i += 2) {
        // re-write to check for  
        var count = Number(string[i + 1])
        // var count = ParseInt(string[i + 1], 10)
        for (var j = 0; j < count; j++) {
            decodedString += string[i]
        }
    }
    return decodedString
}
console.log(decode("h1a1p12y1"))