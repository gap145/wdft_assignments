// Go through array and return largest number
const arr1 = [5, 8, 2, 1, 5, 7, 3, 4, 5, 8, 1, 2, 4, 8, 3, 1, 4, 5]
const arr2 = [15, 26, 74, 12, 3, 6, 9, 1, 2, 5]
var largestNumber = 0  

// Function to  return even numbers from an array of numbers
function largestnum(data) {
    for (i = 0; i < data.length; i++) {
        if (data[i] > largestNumber) {  // If current number is larger than number stored, store this number
            largestNumber = data[i];
        };
    };
    console.log(largestNumber)
};

largestnum(arr1)
largestnum(arr2)