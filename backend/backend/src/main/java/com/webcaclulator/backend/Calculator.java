package com.webcaclulator.backend;

import org.springframework.expression.ExpressionException;

import jdk.jfr.Experimental;

public class Calculator {
    Expression expression;
    private String result;
    

    public Calculator(){
        
    }


    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Expression getExpression() {
        return expression;
    }

    public void setExpression(Expression expression) {
        this.expression = expression;
    }

    public Calculator(Expression expression) {
        this.expression = expression;
    }

    public String add()
    {
       this.result=String.format("%f",Double.parseDouble(expression.getFirstOperand())+Double.parseDouble((expression.getSecondOperand())));
        return result;
    }

    public String divide()
    {   if (Double.parseDouble(expression.getSecondOperand())==Double.valueOf(0)){
            this.setResult("E");
    }
        else{
        this.result=String.valueOf(Double.parseDouble(expression.getFirstOperand())/Double.parseDouble((expression.getSecondOperand())));
        }
        return this.getResult();
    }

    public String subtract()
    {
        this.result=String.valueOf(Double.parseDouble(expression.getFirstOperand())-Double.parseDouble((expression.getSecondOperand())));
        return result;
    }

    public String multiply()
    {
        this.result=String.valueOf(Double.parseDouble(expression.getFirstOperand())*Double.parseDouble((expression.getSecondOperand())));
        return result;
    }
    
    public String square()
    {   
        this.result=String.valueOf(Math.pow(Double.parseDouble(expression.getFirstOperand()),2));
        return result;
    }

    public String getAdditiveInverse()
    {   double value=Double.parseDouble(expression.getFirstOperand());
        
        return this.result=String.valueOf(-1*value);
        
    }
    public String getRoot()
    {
        if(Double.parseDouble(expression.getFirstOperand())<0)
        {
            this.setResult("E");
            return this.result;
        }
        return String.valueOf( Math.sqrt(Double.parseDouble(expression.getFirstOperand())));
    }
    public String getMultiplicativeInverse()
    {
        if (Double.parseDouble(expression.getFirstOperand())==Double.valueOf(0))
        {
            this.result="E";
            return this.result;

        }

        return String.valueOf(1/Double.parseDouble(expression.getFirstOperand()));
    }
    public String percentage()
    {
        this.result=String.valueOf(Double.parseDouble(expression.getFirstOperand())/100);
        return this.result;
    }
    



    
}
