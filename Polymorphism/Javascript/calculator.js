// calculator.js
class Calculator {
    constructor() {
        this._result = 0;
    }

    calculate(value) {
        throw new Error("Method 'calculate()' must be implemented.");
    }

    getResult() {
        return this._result;
    }

    reset() {
        this._result = 0;
    }
}

module.exports = Calculator;
