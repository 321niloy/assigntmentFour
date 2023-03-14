// // Problem 3: Is Less or Greater than seven
//Description: Here seven is subtracted from an input value and it is checked if that number is less than seven and if not less then the result is doubled with the subtraction.//
//--------Here function declaration----------//
function isLGSeven(number) {
    if (typeof number === "number") {
    let absolute_difference = number - 7;
    if (absolute_difference < 7) {
    return absolute_difference;
    }
    else
    return (number * 2);
    }
    //-------Error handling---------//
    return 'Oh no!!! please enter a valid number'
    }

    