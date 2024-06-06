package Abstraction.Java;

// BasicCalculator class that extends the abstract class Calculator
public class BasicCalculator extends Calculator {
    // Override method to add a value to the result
    @Override
    public void add(int value) {
        result += value;
    }

    // Override method to subtract a value from the result
    @Override
    public void subtract(int value) {
        result -= value;
    }

    // Main method to test the BasicCalculator class
    public static void main(String[] args) {
        // Create an instance of BasicCalculator
        BasicCalculator calc = new BasicCalculator();

        // Test add method
        calc.add(10);
        System.out.println("Result after adding 10: " + calc.getResult());

        // Test subtract method
        calc.subtract(5);
        System.out.println("Result after subtracting 5: " + calc.getResult());

        // Test reset method
        calc.reset();
        System.out.println("Result after reset: " + calc.getResult());
    }
}

