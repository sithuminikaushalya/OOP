package Polymorphism.Java;

// Calculator.java
public abstract class Calculator {
    protected int result;

    // Method to calculate the result
    public abstract void calculate(int value);

    // Method to get the current result
    public int getResult() {
        return result;
    }

    // Method to reset the result to 0
    public void reset() {
        result = 0;
    }
}
