// scientificCalculator.js
const Calculator = require('./calculator');

class ScientificCalculator extends Calculator {
    calculate(value) {
        if (this._result === 0) {
            this._result = value;
        } else {
            this._result *= value;
        }
    }
}

module.exports = ScientificCalculator;

// Test the ScientificCalculator class
if (require.main === module) {
    const sciCalc = new ScientificCalculator();

    sciCalc.calculate(10); // Initialize result with 10
    console.log(`Result after initializing with 10: ${sciCalc.getResult()}`); // Output: 10

    sciCalc.calculate(2);
    console.log(`Result after multiplying by 2: ${sciCalc.getResult()}`); // Output: 20

    sciCalc.reset();
    sciCalc.calculate(5); // Initialize result with 5
    sciCalc.calculate(3);
    console.log(`Result after multiplying by 3: ${sciCalc.getResult()}`); // Output: 15
}
