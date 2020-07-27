// Binary System
// If “hex” numbers make sense to you, then good job – you are starting to think like a computer. If you
// really ​ want to get geeky, you’ll need to understand binary as well. In binary each additional digit is an
// additional power of 2, so a number like 

// 0b1111111 = (1 x 2^7 ) + (1 x 2^6 ) + (1 x 2^5 ) + (1 x 2^4 ) + (1 x 2^3 ) + (1 x 2^2 ) + (1 x 2^1 ) + (1 x 2^0 ) = 255 

// Binary to Decimal
// Write a function that accepts a binary string  bin2dec(binStr) and returns the decimal value.
// Given '0b1101' return 13

function bin2dec(binStr) {
    var result = 0


    for (let i = binStr.length - 1; i > 1; i--) {
        if (Number(binStr[i]) === 1) {
            result += Math.pow(2, binStr.length - 1 - i)
        }
    }
    return result
}

console.log(bin2dec("0b1101"))
console.log(bin2dec("0b11111111"))
console.log(bin2dec("0b01111111"))

// function hex2bin(hexNum) {
//     var result = 0

//  }   