// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function getTwoNumbers() {
  const first = readlineSync.questionFloat("Enter first number : ");
  const second = readlineSync.questionFloat("Enter second number: ");
  return { first: first, second: second };
}

function main() {
  let running = true;

  while (running) {
    console.log("============================");
    console.log("     SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");

    const choice = readlineSync.questionInt("Select an operation (1-7): ");

    if (choice === 1) {
      const nums = getTwoNumbers();
      console.log("Result: " + nums.first + " + " + nums.second + " = " + add(nums.first, nums.second).toFixed(2));
    } else if (choice === 2) {
      const nums = getTwoNumbers();
      console.log("Result: " + nums.first + " - " + nums.second + " = " + subtract(nums.first, nums.second).toFixed(2));
    } else if (choice === 3) {
      const nums = getTwoNumbers();
      console.log("Result: " + nums.first + " * " + nums.second + " = " + multiply(nums.first, nums.second).toFixed(2));
    } else if (choice === 4) {
      const nums = getTwoNumbers();
      if (nums.second === 0) {
        console.log("Error: Cannot divide by zero.");
      } else {
        console.log("Result: " + nums.first + " / " + nums.second + " = " + divide(nums.first, nums.second).toFixed(2));
      }
    } else if (choice === 5) {
      const nums = getTwoNumbers();
      if (nums.second === 0) {
        console.log("Error: Cannot divide by zero.");
      } else {
        console.log("Result: " + nums.first + " % " + nums.second + " = " + modulus(nums.first, nums.second).toFixed(2));
      }
    } else if (choice === 6) {
      const nums = getTwoNumbers();
      console.log("Result: " + nums.first + " ** " + nums.second + " = " + exponent(nums.first, nums.second).toFixed(2));
    } else if (choice === 7) {
      console.log("Goodbye!");
      running = false;
    } else {
      console.log("Error: Invalid choice. Please enter a number between 1 and 7.");
    }

    console.log("");
  }
}

main();