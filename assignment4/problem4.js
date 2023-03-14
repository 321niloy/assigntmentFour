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