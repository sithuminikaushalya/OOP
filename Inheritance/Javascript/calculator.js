// calculator.js

// Define the Calculator class
class Calculator {
    constructor() {
        // Initialize the result to 0
        this._result = 0;
    }

    // Method to add a value to the result
    add(value) {
        this._result += value;
    }

    // Method to subtract a value from the result
    subtract(value) {
        this._result -= value;
    }

    // Method to get the current result
    getResult() {
        return this._result;
    }

    // Method to reset the result to 0
    reset() {
        this._result = 0;
    }
}

// Export the Calculator class
module.exports = Calculator;
