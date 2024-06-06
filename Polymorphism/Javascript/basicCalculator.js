// basicCalculator.js
const Calculator = require('./calculator');

class BasicCalculator extends Calculator {
    calculate(value) {
        this._result += value;
    }
}

module.exports = BasicCalculator;
