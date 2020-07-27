function string_to_array(str) {
    var wordArr = []
    wordArr.push(str.split(" "));
    return wordArr;
}
console.log(string_to_array("Welcome to coding Dojo"));


function string_to_array2(str) {
    var newArr = []
    var tempString = ""
    console.log(str.length)

    for (var i = 0; i < str.length; i++) {

        console.log(str[i])
        if (str[i] != " ") {
            tempString += str[i]
            console.log(tempString)
        } else {
            console.log(tempString)
            newArr.push(tempString)
            console.log(newArr)
            tempString = ""
        }
        if (i == str.length - 1) {
            newArr.push(tempString)
        }
    }
    return newArr
}

console.log(string_to_array2("Hello Coding Dojo"));


function reverseString(str) {
    var revArr = []
    var arr2rev = string_to_array2(str)

    for (var k = arr2rev.length - 1; k >= 0; k--) {
        revArr.push(arr2rev[k]);
        console.log(revArr)
    }

    return revArr
}

console.log(reverseString("Hello coding dojo"));