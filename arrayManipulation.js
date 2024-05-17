//Task 1 
/*This task is to manipulate an array by checking each value if it is perfectly divisible by 2
the after if true it sqaures if not it multiplies by three*/

const inputArray = [1, 2, 3, 4, 5];
const stringArray = ['Bat', 'cat', 'HAT', 'Mat', 'rat']

function processArray (array) {
    return array.map(number => number % 2 === 0 ? number ** 2: number *3)
};

const processedArray = processArray(inputArray);

console.log(processedArray);


//Task 2
/* This task is to take in two arrays as arguments and then modifies the elemets in the stringArray based on
the output we get in the processedArray. If even we capitalise, if odd we turn teh string into lowercase */

function formatArrayStrings (stringArray, processedArray) {
    return stringArray.map((string, index) => {
        const number = processedArray[index];
        return number % 2 === 0 ? string.toUpperCase() : string.toLowerCase();
    })
}

const formattedStrings = formatArrayStrings(stringArray, processedArray);
console.log(formattedStrings);
