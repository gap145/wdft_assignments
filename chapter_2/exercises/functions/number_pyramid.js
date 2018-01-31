// function called printPyramid that prints pyramid of int inserted into function
//     1     4 spaces
//    2 2    3 spaces
//   3 3 3   2 spaces
//  4 4 4 4  1 space
// 5 5 5 5 5   none


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


function printFrame(arr) {
    function fill (str, length, char) {
      return (str.length < length) ? fill(str + char, length, char) : str;
    }
    
    let size = arr.map((str) => {
            return str.length;
        })
        .reduce((a, b) => {
            return Math.max(a, b);
        });
    
    let line = fill('', size + 4, '*');
    
    arr = arr.map((element) => {
            return '* '+ fill(element, size, ' ') + ' *';
        })
    arr.unshift(line);
    arr.push(line);
    
    return arr.join('\n');;
}

console.log(printFrame(["Hello", "World"]));

function printFrame(arr) {
    function fill (str, length, char) {
      return (str.length < length) ? fill(str + char, length, char) : str;
    }
    
    let size = arr.map((str) => {
            return str.length;
        })
        .reduce((a, b) => {
            return Math.max(a, b);
        });
    
    let line = fill('', size + 4, '*');
    
    arr = arr.map((element) => {
            return '* '+ fill(element, size, ' ') + ' *';
        })
    arr.unshift(line);
    arr.push(line);
    
    return arr.join('\n');;
}

console.log(printFrame(['The', 'Quick', 'Brown', 'Fox']));