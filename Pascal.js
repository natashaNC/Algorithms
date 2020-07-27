// Pascal's Triangle

// Given a value N, return the corresponding row from Pascal's triangle as an array

// N      Array
// ----------------------
// 0 => [1]
// 1 => [1, 1]
// 2 => [1, 2, 1]
// 3 => [1, 3, 3, 1]
// 4 => [1, 4, 6, 4, 1]

// https://en.wikipedia.org/wiki/Pascal%27s_triangle

function pascal(n) {
    if (n === 0) {
        return [1];
    } else if (n === 1) {
        return [1, 1];
    } else {
        const prev = pascal(n - 1);
        const result = [1];
        for (let i = 0; i < prev.length - 1; i++) {
            result.push(prev[i] + prev[i + 1]);
        }
        result.push(1);
        return result;
    }
}

console.log(pascal(4))


let createPascalTriangle = (rows) => {
    let sides = [[1], [1, 1]];
    for (let i = 2; i < rows; i++) {
        insertRow(sides);
    }
    return sides;
};

let insertRow = (pyramid) => {
    let previousRow = pyramid[pyramid.length - 1];
    let newRow = [1];
    for (let i = 0; i < previousRow.length - 1; i++) {
        let current = previousRow[i];
        let next = previousRow[i + 1];
        newRow.push(current + next);
    }
    newRow.push(1);
    return pyramid.push(newRow);
};

// console.log(createPascalTriangle(5));