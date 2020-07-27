function RemoveDuplicates(str) {
    var newStr = ""

    for (var i = 0; i < str.length; i++) {
        var count = 0
        for (var j = i + 1; j < str.length; j++) {
            // console.log(str[i], str[j])

            if (str[i] == str[j]) {
                console.log(str[i], i, str[j], j)
                count++
            }
        }
        if (count == 0) {
            console.log(count)
            newStr += str[i]
            console.log(newStr)
        }
    }
    console.log(newStr)
    return newStr
}

RemoveDuplicates("Snaps! crackles! pops!")