//Task 1 
/*This task is to manipulate an array by checking each value if it is perfectly divisible by 2
the after if true it sqaures if not it multiplies by three*/

const inputArray = [42, 23, 37, 14, 45];
const stringArray = ['Bat', 'Cat', 'HAT', 'Mat', 'Rat']

function processArray (array) {
    return array.map(number => number % 2 === 0 ? number ** 2: number * 3)
};

const newNumbersArray = processArray(inputArray);

console.log ("The original Values: ", inputArray)
console.log("The modified Values: ", newNumbersArray);


//Task 2
/* This task is to take in two arrays as arguments and then modifies the elemets in the stringArray based on
the output we get in the processedArray. If even we capitalise, if odd we turn teh string into lowercase */

function formatArrayStrings (stringArray, newNumbersArray) {
    return stringArray.map((string, numbervalue) => {
        const number = newNumbersArray[numbervalue];
         number % 2 === 0 ? string.toUpperCase() : string.toLowerCase();
    })
}

const formattedStrings = formatArrayStrings(stringArray, newNumbersArray);
console.log("The Original Strings: ", stringArray)
console.log("The Formatted Strings: ", formattedStrings);

//Task 3
/* This task is to use the createUserInfo function in userInfo to take in the newly formatted strings from
formattedStrings using and then use that to create the user profiles */

const { createUserProfiles } = require('./userInfo.js');

const Profiles = createUserProfiles(stringArray, formattedStrings);
console.log("The User Profiles are:", Profiles);



