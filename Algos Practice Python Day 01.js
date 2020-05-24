function reverseString(InputString) {
    console.log('Original string is', InputString);
    var newString = "";

    for (var i = InputString.length - 1; i >= 0; i--) {
        newString += InputString[i];
    }

    console.log('The reversed string is', newString);
    return newString;
}

reverseString('hello');