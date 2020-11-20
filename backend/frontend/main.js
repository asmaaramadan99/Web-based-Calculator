
const apiURL="http://localhost:8092/api/calculator";



const calculator=new Vue({
    el: "#calculator",
    data () {
        return {
           
           firstOperand: '',
           secondOperand:'',
           operation: '',
           displayedOperand:'',
           isFirstOperandSet: false,
           isSecondOperandSet: false,
           isOperationSet: false,
           isErrorDetected : false,
           result:"",
           Expression:{
               firstOperand: '',
               secondOperand : '',
               operation: ''

           }


        }
    },
   

    methods :
    {  
            setOperandValue(val){
           if(this.result!='' && this.displayedOperand!='')
           {  
               this.result=''
               this.displayedOperand=''
           }
            
            if(this.isOperationSet==false)
            {   
                if(!(this.displayedOperand.charAt(this.displayedOperand.length-1)=='.' && val=='.'))
                this.displayedOperand+=val
               
            
            }
            else{
            
                this.displayedOperand+=val
                this.secondOperand=this.displayedOperand
                this.Expression.secondOperand=this.secondOperand
                this.isSecondOperandSet=true

            }
            if(this.result!='' && this.isOperationSet==false || this.firstOperand=='-')
            {
                this.clear()
            }


        },
        setFirstOperandValue(val){
            this.firstOperand+=val
        },
        setSecondOperandValue(val){
            this.secondOperand+=val
        },
        setOperation(operation)
        {   
            if(this.result=="E")
            {
                this.result="E"
                this.displayedOperand="E"
            }
            else{
            if (operation=="minus" && this.isFirstOperandSet==false && this.displayedOperand.includes('-')==false &&this.displayedOperand=='')
             {   
                 
                 this.displayedOperand+='-'
             }
          
             else if (!this.isOperationSet && this.displayedOperand.length!=0  ){
            {
            if(this.displayedOperand!='-'){
            this.operation=operation
            this.Expression.operation=this.operation
            this.isOperationSet=true
            this.firstOperand=this.displayedOperand
            this.isFirstOperandSet=true
            this.Expression.firstOperand=this.firstOperand
            this.displayedOperand=''
            }
             }
            
          
        }
             else if(this.isOperationSet=true && this.isSecondOperandSet==false){
                 this.operation=operation
                 this.Expression.operation=this.operation
                 
             }
            }
        },

        clear(){
            this.firstOperand= '',
           this.secondOperand='',
           this.operation='',
           this.displayedOperand='',
           this.isFirstOperandSet= false,
           this.isSecondOperandSet=false,
           this.isOperationSet=false,
           this.result='',
           this.Expression={
               firstOperand: '',
               secondOperand : '',
               operation: ''

        
            
        }
        
    },

     
    
    
        
       backSpace()
       { this.displayedOperand=this.displayedOperand.toString().slice(0,-1)
        if (this.result!='')
        {
            this.clear()
        }


       },
        
        
     

        tryExpression()
        {   
            if(this.firstOperand!='' && this.operation!='' && this.secondOperand!=''){
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.Expression)
              };
              
            fetch(apiURL+'/sendExpression',requestOptions)
            .then(response=>{
               
                  return response.text();
               
            })
            .then(result=>{
                try {
                    const data = JSON.parse(result);
                    console.log(data)
                    this.result=data;
                    this.displayedOperand=data;
                    this.firstOperand=data;
                    this.secondOperand='';
                    this.isSecondOperandSet=false;
                    this.isOperationSet=false;
                    this.operation='';
                    this.Expression.firstOperand=this.firstOperand;
                    this.Expression.secondOperand='';
                    this.Expression.operation='';
                    
                  
                } catch(err) {
                   this.clear()
                   this.result=result
                   this.displayedOperand=result
                   
                   
                }
              
          
                
            })
        }
       
        },
        singleOperandRequest()
        {   this.secondOperand=0
            if(this.firstOperand!=''){
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.Expression)
              };
            fetch(apiURL+'/sendSingleExpression',requestOptions)
            .then(response=>{
                
                return response.text();
            })
            .then(result=>{
                try{
                    const data=json.parse(result)
                    this.displayedOperand=data
                    this.result=data;
                    this.displayedOperand=data;
                    this.firstOperand=data;
                    this.secondOperand='';
                    this.isSecondOperandSet=false;
                    this.isOperationSet=false;
                    this.operation='';
                    this.Expression.firstOperand=this.firstOperand;
                    this.Expression.secondOperand='';
                    this.Expression.operation='';
                

                }
                catch(err)
                {   this.clear()
                    this.result=result
                    this.displayedOperand=result
                }

                
            })
        }
       
    }
       
    }
})

