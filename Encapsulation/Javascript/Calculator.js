// calculator.js
class Calculator {
    constructor() {
        this._result = 0;
    }

    add(value) {
        this._result += value;
    }

    subtract(value) {
        this._result -= value;
    }

    getResult() {
        return this._result;
    }

    reset() {
        this._result = 0;
    }
}

module.exports = Calculator;