// // Problem 2: Finding even or odd
//Description: How many letters are there in a string and find out whether the string is odd or even.//
//------Here declare the function--------//
function evenOdd(names) {
    if (typeof names === 'string') {
    if (names.length % 2 === 0) {
    return 'even';
    }
    else {
    return 'odd';
    }
    }
    return 'Oh no!!! Please give the valid string';
    }
