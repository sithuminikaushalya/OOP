// scientificCalculator.js

// Import the Calculator class
const Calculator = require('../calculator');

// Define the ScientificCalculator class, extending Calculator
class ScientificCalculator extends Calculator {
    // Method to calculate the square root of the current result
    squareRoot() {
        this._result = Math.sqrt(this._result);
    }
}

// Export the ScientificCalculator class
module.exports = ScientificCalculator;

// Test the ScientificCalculator class
if (require.main === module) {
    const sciCalc = new ScientificCalculator();

    sciCalc.add(16);
    console.log(`Result after adding 16: ${sciCalc.getResult()}`); // Output: Result after adding 16: 16

    sciCalc.squareRoot();
    console.log(`Result after square root: ${sciCalc.getResult()}`); // Output: Result after square root: 4

    sciCalc.reset();
    console.log(`Result after reset: ${sciCalc.getResult()}`); // Output: Result after reset: 0
}
