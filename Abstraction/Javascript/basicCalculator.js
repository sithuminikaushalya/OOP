// Import the Calculator class
const Calculator = require('./calculator');

// BasicCalculator class that extends the abstract class Calculator
class BasicCalculator extends Calculator {
    // Method to add a value to the result
    add(value) {
        this._result += value;
    }

    // Method to subtract a value from the result
    subtract(value) {
        this._result -= value;
    }
}

// Export the BasicCalculator class
module.exports = BasicCalculator;

// Test the BasicCalculator class
if (require.main === module) {
    const calc = new BasicCalculator();
    
    calc.add(10);
    console.log(`Result after adding 10: ${calc.getResult()}`); // Output: Result after adding 10: 10
    
    calc.subtract(5);
    console.log(`Result after subtracting 5: ${calc.getResult()}`); // Output: Result after subtracting 5: 5
    
    calc.reset();
    console.log(`Result after reset: ${calc.getResult()}`); // Output: Result after reset: 0
}
