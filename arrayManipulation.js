//Task 1

const inputArray = [1, 2, 3, 4, 5];

function processArray (array) {
    return array.map(number => number % 2 === 0 ? number ** 2: number *3)
};

const processedArray = processArray(inputArray);

console.log(processedArray);


/* function arrayInput() {
    const input = prompt
} */