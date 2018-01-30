// console.log even numbers 
const arr1 = [5, 8, 2, 1, 5, 7, 3, 4, 5, 8, 1, 2, 4, 8, 3, 1, 4, 5]
const arr2 = [15, 26, 74, 12, 3, 6, 9, 1, 2, 5]

// Function to determine if number is even by getting remainder div by 2 %modulus
function isEven(number) {
    if (number % 2 == 0) {
        return 1; // true
    } else {
        return 0; // false
    }
}

// Function to repeat through list and extract even numbers
function returnEven(data) {
    for (i = 0; i < data.length; i++) {
        if (isEven(data[i])) {
            console.log(data[i]);
        };
    }
};

returnEven(arr1)
returnEven(arr2)