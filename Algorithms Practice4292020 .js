function chainChange(num) {

    var change = {};
    var remainder = 0;
    change {
        q: 25,
        d: 10,
        n: 5,
        p: 1
    }

    remainder = num % change.q;
    var q = math.trunc(num / change.q);

    if (remainder !== 0) {
        remainder = remainder % change.d;
        var d = math.trunc(remainder / change.d);
    }

    if (remainder !== 0) {
        remainder = remainder % change.n;
        var n = math.trunc(remainder / change.n);
    }

    if (remainder !== 0) {
        remainder = remainder % change.p;
        var p = math.trunc(remainder / change.p);
    }

    return {
        q,
        d,
        n,
        p
    };
}

// code here
// return an object
// {
'q': number of quarters,
    'd': number of dimes,
    'n': number of nickels,
    'p': number of pennies
// }

Week II Day III Algorithms
More Objects
Part One

function chainChange(num) {
    // code here
    // return an object
    // {
    'q': number of quarters,
    'd': number of dimes,
    'n': number of nickels,
    'p': number of pennies
    // }
}

Part Two Array: Swap Pairs

function SwapPairs(arr) {}
I => [1, 2, 3, 4]
0 => [2, 1, 4, 3]

Part Three Array: Move Min to Front

function MoveMinToFront(arr) {}
I => [4, 2, 1, 3, 5]
0 => [1, 4, 2, 3, 5]