package Polymorphism.Java;

// Main.java
public class Main {
    public static void main(String[] args) {
        // Test BasicCalculator
        BasicCalculator basicCalc = new BasicCalculator();
        basicCalc.calculate(10);
        System.out.println("BasicCalculator result after adding 10: " + basicCalc.getResult());

        // Test ScientificCalculator
        ScientificCalculator sciCalc = new ScientificCalculator();
        sciCalc.calculate(10); // Set initial value to multiply
        sciCalc.calculate(2);
        System.out.println("ScientificCalculator result after multiplying by 2: " + sciCalc.getResult());

        sciCalc.reset();
        sciCalc.calculate(5); // Set initial value to multiply
        sciCalc.calculate(3);
        System.out.println("ScientificCalculator result after multiplying by 3: " + sciCalc.getResult());
    }
}
