package Abstraction.Java;

// Abstract class Calculator that contains the structure for a basic calculator
public abstract class Calculator {
    // Protected variable to store the result
    protected int result;

    // Abstract method to add a value to the result
    public abstract void add(int value);

    // Abstract method to subtract a value from the result
    public abstract void subtract(int value);

    // Method to get the current result
    public int getResult() {
        return result;
    }

    // Method to reset the result to 0
    public void reset() {
        result = 0;
    }
}
