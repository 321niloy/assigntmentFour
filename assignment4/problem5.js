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
