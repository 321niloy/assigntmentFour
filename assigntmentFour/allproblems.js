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

    
    // // Problem 4: Finding Bad data
// Description: No matter how many numbers are in an array, only negative numbers are extracted from it.//
// ----- Here declare the function ------//
function findingBadData(badData) {
    if (Array.isArray(badData)) {
    let negativeNumber = 0;
    for (let i = 0; i < badData.length; i++) {
    let data = badData[i];
    if (data < 0) {
    negativeNumber++;
    }
    }
    // ----------Return the negative value----------//
    return negativeNumber;
    }
    return 'Please provide the Array input'
    }


    //Problem 5: Convert your gems into diamond
// Description: Here the diamonds are extracted from the gems of many friends. If the diamonds are above 1000, then 2000 is subtracted from the total diamonds and the remaining amount is returned.//
//-------Here declare the function--------//
function gemsToDiamond(friendOne, friendTwo, friendThree) {
    if (typeof friendOne == 'number' && typeof friendTwo == 'number' && typeof friendThree == 'number') {
    const firstFriendGems = 21;
    const secondFriendGems = 32;
    const thirdFriendGems = 43;
    let firstFriendDiamond = firstFriendGems * friendOne;
    let secondFriendDiamond = secondFriendGems * friendTwo;
    let thirdFriendDiamond = thirdFriendGems * friendThree;
    let totalFriendDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    //-----apply the condition------//
    if (totalFriendDiamond > 1000 * 2) {
    let totalDiamond = totalFriendDiamond - 2000;
    return totalDiamond;
    }
    return totalFriendDiamond;
    }
    //-------error handling--------//
    return 'Please provide the valid number'
    }

