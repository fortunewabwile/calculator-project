//JavaScript Calculator

// Empty array that stores the history of calculations
const history = [];

// Adds a calculation record to the history.
// Used by every operation function below.
function addToHistory(operand1, operand2, operator, result) {
  history.push({
    operands: [operand1, operand2],
    operator: operator,
    result: result,
  });
}

// Simple operations: each takes two numbers, logs to history, returns the result

function add(a, b) {
  const result = a + b;
  addToHistory(a, b, "+", result);
  return result;
}

function subtract(a, b) {
  const result = a - b;
  addToHistory(a, b, "-", result);
  return result;
}

function multiply(a, b) {
  const result = a * b;
  addToHistory(a, b, "*", result);
  return result;
}

function divide(a, b) {
  if (b === 0) {
    console.log("Error: cannot divide by zero.");
    return null; // nothing is added to the history for an invalid calculation
  }
  const result = a / b;
  addToHistory(a, b, "/", result);
  return result;
}

// Displays the history, or tells the user there are no stored calculations
function displayHistory() {
  if (history.length === 0) {
    console.log("No stored calculations.");
    return;
  }
  console.log("Calculation History:");
  history.forEach((calc, index) => {
    const [a, b] = calc.operands;
    console.log(`${index + 1}. ${a} ${calc.operator} ${b} = ${calc.result}`);
  });
}

// ---- Testing ----
displayHistory();          // No stored calculations.
console.log(add(5, 3));         // 8
console.log(subtract(10, 4));   // 6
console.log(multiply(6, 7));    // 42
console.log(divide(20, 5));     // 4
console.log(divide(5, 0));      // Error message, returns null
displayHistory();