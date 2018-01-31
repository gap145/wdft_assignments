// set it up as 1-4 like pyramid, 1 having 1, 2, 2...
//    1
//   2 2
//  3 3 3
// 4 4 4 4

//n is the number of lines in your pyramid  
function printPyramid(value) {
    if (value > 9 || value <= 0) {
        console.log('Please pick a positive single digit number');
    } else {
        for (i = 1; i <= value; i++) {
            var rowString = " ".repeat(value - i)  // Initial spacing
            var midPortion = (String(i) + " ").repeat(i);  // Spaces and numbers repeated
            rowString += midPortion;  // Combine both
            console.log(rowString);
        };
    };
};

printPyramid(5);