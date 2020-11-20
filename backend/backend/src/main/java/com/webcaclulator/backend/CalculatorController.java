package com.webcaclulator.backend;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@CrossOrigin
@RestController
@RequestMapping("/api/calculator")
public class CalculatorController {
    CalculatorService calculatorService;
    public CalculatorController()
    {
       calculatorService =new CalculatorService();
    }
    /*@RequestMapping("/{firstOperand}/{secondOperand}/{operation}")
    public Expression getExpression (@PathVariable String firstOperand, @PathVariable String secondOperand,@PathVariable String operation) {
        // code here

        return new Expression(firstOperand, secondOperand, operation);
    }*/
 
    

   @PostMapping(
    value = "/sendExpression", consumes = "application/json", produces = "application/json")
    public String createExpression(@RequestBody Expression expression) {
        calculatorService.getCalculator().setExpression(expression);
        
        
      
        
    return calculatorService.getResult();
}
   @PostMapping(
    value = "/sendSingleExpression", consumes = "application/json", produces = "application/json")
    public String createSingleExpression(@RequestBody Expression expression) {
        calculatorService.getCalculator().setExpression(expression);
        
    return calculatorService.getResult();
}


    
}
