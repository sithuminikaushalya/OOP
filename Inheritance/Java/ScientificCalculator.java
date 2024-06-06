package Inheritance.Java;

public class ScientificCalculator extends Calculator {
    // Method to calculate the square root of the current result
    public void squareRoot() {
        result = (int) Math.sqrt(result);
    }
}