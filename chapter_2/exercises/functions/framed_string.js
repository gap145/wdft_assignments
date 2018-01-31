
var arr1 = ['Hello', 'World', 'kfdjfkdsnfjdshfladskjhl', 'ok'];
var arr2 = ['The', 'Quick', 'Brown', 'Fox'];


// Encapsulate strings in * border
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