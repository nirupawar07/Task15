
// Dummy array for testing
let numbers = [4, 8, 2, 11, 6, 7, 10];

// 1. Find Maximum Number
// Arrow Function

const findMaximum = (array) => {

    let maximum = array[0];

    for (let i = 1; i < array.length; i++) {

        if (array[i] > maximum) {
            maximum = array[i];
        }

    }

    return maximum;
};

// 2. Calculate Sum of All Elements
// Anonymous Function

const calculateSum = function (array) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        sum = sum + array[i];

    }

    return sum;
};
// 3. Count Odd Numbers
// Normal Function

function countOddNumbers(array) {

    let count = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 !== 0) {
            count++;
        }

    }

    return count;
}



// Display Results


console.log("Array:", numbers);

console.log("Maximum number:", findMaximum(numbers));

console.log("Sum of all elements:", calculateSum(numbers));

console.log("Count of odd numbers:", countOddNumbers(numbers));