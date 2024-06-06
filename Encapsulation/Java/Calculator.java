package Encapsulation.Java;

// Calculator.java
public class Calculator {
    private int result;

    // Method to add a value to the result
    public void add(int value) {
        result += value;
    }

    // Method to subtract a value from the result
    public void subtract(int value) {
        result -= value;
    }

    // Method to get the current result
    public int getResult() {
        return result;
    }

    // Method to reset the result to 0
    public void reset() {
        result = 0;
    }

    // Main method to test the Calculator class
    public static void main(String[] args) {
        Calculator calc = new Calculator();

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
