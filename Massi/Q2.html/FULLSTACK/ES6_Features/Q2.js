// Variable Declarations
let x = 5; // declare a variable using let
const PI = 3.14; // declare a constant using const

// Function Creation
// Traditional function
function addNumbers(a, b) {
  return a + b;
}

// Arrow function
const multiplyNumbers = (a, b) => a * b;

// Template Literals
const result = `
The result of adding 2 and 3 is: ${addNumbers(2, 3)}
The result of multiplying 4 and 5 is: ${multiplyNumbers(4, 5)}
The value of PI is: ${PI}
`;

console.log(result);