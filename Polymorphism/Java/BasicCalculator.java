package Polymorphism.Java;

// BasicCalculator.java
public class BasicCalculator extends Calculator {
    // Method to add a value to the result
    @Override
    public void calculate(int value) {
        result += value;
    }
}
