// String: Rotate String
// Create a function that accepts a string and an integer, and rotates the characters in the string to the right by that amount
// Given ("Boris Godunov", 5) return "dunovBoris Go".

function rotateString(str, num) {
    var tempString = ""
    var tempString2 = ""

    for (var i = str.length - num; i < str.length; i++) {
        tempString += str[i]

    }

    for (var k = 0; k < str.length - num; k++) {
        tempString2 += str[k]

    }

    console.log(tempString)
    console.log(tempString2)

    var newStr = tempString + tempString2
    console.log(newStr)

    return newStr
}

rotateString("Boris Godunov", 5)

function isRotate(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    } else {
        for (var i = 0; i < str1.length; i++) {
            let tester = rotateString(str1, i);
            if (tester == str2) {
                return true;
            }
        }
    }
    return false;
}

function isRotated(orgStr, checkStr) {
    var tempStr = ""
    for (var j = 0; j < orgStr.length; j++) {
        tempStr += orgStr[j]
        if (tempStr + checkStr == orgStr) {
            return true
        }
    }
    return false
}
console.log(isRotated("Boris Godunov", "dunov"))
console.log(isRotated("Boris Godunov", "udunov"))