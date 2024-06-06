// Abstract class Calculator that contains the structure for a basic calculator
class Calculator {
    constructor() {
        // Private variable to store the result
        this._result = 0;
    }

    // Abstract method to add a value to the result
    add(value) {
        throw new Error("Method 'add()' must be implemented.");
    }

    // Abstract method to subtract a value from the result
    subtract(value) {
        throw new Error("Method 'subtract()' must be implemented.");
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
