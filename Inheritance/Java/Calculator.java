package Inheritance.Java;

public class Calculator {
    protected int result;

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

}