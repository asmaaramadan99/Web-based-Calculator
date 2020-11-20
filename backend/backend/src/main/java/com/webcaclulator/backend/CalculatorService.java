package com.webcaclulator.backend;

public class CalculatorService {

    private Calculator calculator;

    public CalculatorService()
    {
        calculator=new Calculator();
    }

    public Calculator getCalculator() {
        return calculator;
    }

    public void setCalculator(Calculator calculator) {
        this.calculator = calculator;
    }

    @Override
    public String toString() {
        return "CalculatorService [calculator=" + calculator + "]";
    }

    public String getResult()
    {
        switch(calculator.getExpression().getOperation())
        {
            case "plus":
             return calculator.add();
            case "minus":
            return calculator.subtract();
        
            case "multiply":
            return calculator.multiply();
            case "divide":
            return calculator.divide();
            case "getRoot":
            return calculator.getRoot();
            case "multiplicativeInverse":
            return calculator.getMultiplicativeInverse();
            case "square":
            return calculator.square();
            case "percentage":
            return calculator.percentage();
            case "additive inverse":
            return calculator.getAdditiveInverse();
        }
        return "";
    }
    
}
