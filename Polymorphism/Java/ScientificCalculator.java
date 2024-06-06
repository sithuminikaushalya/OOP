package Polymorphism.Java;

// ScientificCalculator.java
public class ScientificCalculator extends Calculator {
    // Method to multiply the result by a value
    @Override
    public void calculate(int value) {
        result *= value;
    }
}
