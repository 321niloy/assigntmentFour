// Problem 1: Let's play a mind game
//Description: Here the total result of addition, subtraction, multiplication, division is shown.//
// --------Here declare the function----------//
function mindGame(number) {
    if (typeof number === 'number' && number > 0) {
    const output = (number * 3 + 10) / 2 - 5;
    return output;
    }
    return 'Oh No! Please enter a positive number.';
    }

   
    