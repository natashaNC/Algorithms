    Biggie Size - Given an array, write a

    function that changes all positive numbers in the array to the string "big".Example: makeItBig([-1, 3, 5, -5]) returns that same array, changed to[-1, "big", "big", -5].

    function x(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                arr[i] = "big";
            }
        }
        console.log(arr);
        return arr;

    }


    Print Low, Return High - Create a

    function that takes in an array of numbers.The

    function should print the lowest value in the array, and
    return the highest value in the array.

    var low = 0;
    var high = 0;

    function x(arr) {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > high) {
                high = arr[i];
            }

            if (arr[i] < low)
                low = arr[i];
        }
        console.log(low);
        return high;
    }


    Print One, Return Another - Build a

    function that takes in an array of numbers.The

    function should print the second - to - last value in the array, and
    return the first odd value in the array.

    var odd = 0;

    function x(arr) {
        console.log(arr[arr.length - 2]);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 != 1) {
                odd = arr[i];
                return odd;
            }

        }
        console.log(odd);
        console.log(i);

    }

    Double Vision - Given an array(similar to saying 'takes in an array'), create a

    function that returns a new array where each value in the original array has been doubled.Calling double([1, 2, 3]) should
    return [2, 4, 6] without changing the original array.

    var newArr = [];
    var double = 0;

    function x(arr) {
        for (var i = 0; i < arr.length; i++) {
            double = arr[i] * arr[i];
            newArr.push(double);
        }
        console.log(arr);
        console.log(newArr);
        return newArr;
    }

    x([-1, 3, 5, -5]);



    Count Positives - Given an array of numbers, create a

    function to replace the last value with the number of positive values found in the array.Example, countPositives([-1, 1, 1, 1]) changes the original array to[-1, 1, 1, 3] and returns it.

    var temp = 0;

    function x(arr) {
        console.log(arr);
        temp = arr.length;
        arr.pop();
        arr.push(temp);

        console.log(arr);
        return arr;

    }

    x([-1, -1, -1, -1]);


    Evens and Odds - Create a

    function that accepts an array.Every time that array has three odd values in a row, print "That's odd!".Every time the array has three evens in a row, print "Even more so!".


    var even = 0;
    var odd = 0;

    function x(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                even++;
            }
            if (even === 3 && odd < 3) {
                console.log("Even more so!");
                even = 0;
                odd = 0;
            } else if (arr[i] % 2 !== 0) {
                odd++;
            }
            if (odd === 3 && even < 3) {
                console.log("That's odd!");
                odd = 0;
                even = 0;
            }
        }
    }

    x([-1, 3, 5, 2, 3, -1, 0, -1, -1, 2, 2, 2, 2, 10]);

    Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd(arr[1], arr[3], arr[5], etc).Afterward, console.log each array value and
    return arr.

    function x(arr) {
        console.log(arr);

        for (var i = 0; i < arr.length; i++) {

            if (i % 2 !== 0) {
                arr[i] += 1;
            }

        }

        console.log(arr);
        return arr;
    }

    x([-1, -5, -7, 0, 1, 2, 3]);

    Previous Lengths - You are passed an array(similar to saying 'takes in an array'
        or 'given an array') containing strings.Working within that same array, replace each string with a number - the length of the string at the previous array index - and
    return the array.For example, previousLengths(["hello", "dojo", "awesome"]) should
    return ["hello", 5, 4].Hint: Can
    for loops only go forward ?

        function previousLengths(arr) {
            console.log(arr);
            for (var i = arr.length - 1; i > 0; i--) {
                arr[i] = arr[i - 1].length;
            }
            console.log(arr);
            return arr;
        }

    previousLengths(["hello", "dojo", "awesome"])


    Add Seven - Build a

    function that accepts an array.Return a new array with all the values of the original, but add 7 to each.Do not alter the original array.Example, addSeven([1, 2, 3]) should
    return [8, 9, 10] in a new array.

    var newArr = [];

    function addSeven(arr) {
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i] + 7);
        }
        console.log("Arr is", arr);
        console.log("New Array is", newArr);
        return newArr;
    }

    addSeven([1, 2, 3]);



    Reverse Array - Given an array, write a

    function that reverses its values, in -place.Example: reverse([3, 1, 6, 4, 2]) returns the same array, but now contains values reversed like so...[2, 4, 6, 1, 3].Do this without creating an empty temporary array.(Hint: you 'll need to swap values).

            var temp = 0;

            function x(arr) {
                console.log('original array is', arr);
                for (var i = 0; i < arr.length / 2; i++) {
                    temp = arr[arr.length - 1 - i];
                    arr[arr.length - 1 - i] = arr[i];
                    arr[i] = temp;
                }
                console.log("reversed array is", arr);
            }

            x([3, 1, 6, 4, 2, 4]);

            Outlook: Negative - Given an array, create and
            return a new one containing all the values of the original array, but make them all negative(not simply multiplied by - 1).Given[1, -3, 5],
                return [-1, -3, -5].

            var newArr = [];

            function x(arr) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] < 0)
                        newArr.push(arr[i]);
                    else {
                        newArr.push(arr[i] * -1);
                    }
                }
                console.log('newArr', newArr);
                return newArr;
            }

            x([-1, -3, -5, 1, 3]);

            Always Hungry - Create a
            function that accepts an array, and prints "yummy"
            each time one of the values is equal to "food".If no array values are "food", then print "I'm hungry"
            once.


            function x(arr) {
                var counter = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] === "food") {
                        console.log("yummy", i)
                        counter++;
                    }
                }
                if (counter === 0) {
                    console.log("I'm hungry");
                }
                console.log(counter);
            }

            x(["food", "food", 1, 2, 3, "food"]);

            Swap Toward the Center - Given an array, swap the first and last values, third and third - to - last values, etc.Example: swapTowardCenter([true, 42, "Ada", 2, "pizza"]) turns the array into["pizza", 42, "Ada", 2, true].swapTowardCenter([1, 2, 3, 4, 5, 6]) turns the array into[6, 2, 4, 3, 5, 1].No need to
            return the array this time.

            function swapTowardCenter(arr) {
                var temp = 0;

                temp = arr[0];
                arr[0] = arr[arr.length - 1];
                arr[arr.length - 1] = temp;
                console.log('new arr', arr);
            }
            swapTowardCenter([true, 42, "Ada", 2, "pizza"])


            Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and
            return the changed array arr.For example, scaleArray([1, 2, 3], 3) should
            return [3, 6, 9].

            function x(arr, Y) {
                console.log("the array is", arr);
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = arr[i] * Y;
                }
                console.log("the new arr is", arr)
                return arr;
            }

            x([1, 2, 3], 3);