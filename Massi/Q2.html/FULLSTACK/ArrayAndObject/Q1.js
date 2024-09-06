
let numbers = [];

// Function to add a number to the array
function addNumber(num) {
    numbers.push(num);
    console.log(`${num} has been added to the array.`);
}

// Function to remove a number from the array (removes the first occurrence)
function removeNumber(num) {
    let index = numbers.indexOf(num);
    if (index !== -1) {
        numbers.splice(index, 1);
        console.log(`${num} has been removed from the array.`);
    } else {
        console.log(`${num} not found in the array.`);
    }
}

// Function to sort the array in ascending order
function sortNumbers() {
    numbers.sort((a, b) => a - b);
    console.log("Array sorted in ascending order:", numbers);
}

// Function to calculate the sum of numbers in the array
function calculateSum() {
    let sum = numbers.reduce((total, num) => total + num, 0);
    console.log("Sum of numbers:", sum);
    return sum;
}

// Function to calculate the average of numbers in the array
function calculateAverage() {
    if (numbers.length === 0) {
        console.log("The array is empty. Cannot calculate the average.");
        return 0;
    }
    let sum = calculateSum();
    let average = sum / numbers.length;
    console.log("Average of numbers:", average);
    return average;
}

// Test the functions

addNumber(5);
addNumber(4);
addNumber(1);
console.log("Current array:", numbers);

removeNumber(20);
console.log("Array after removal:", numbers);

sortNumbers();

calculateSum();
calculateAverage();
