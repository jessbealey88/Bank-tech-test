## 1. Class System Design


┌────────────────────────────┐
│ Account                    │
│                            │
│ - stores balance           │
│ - Makes deposits           │
│ - Makes withdrawals        │
│ - stores transaction       │
│  history                   │
└───────────┬────────────────┘      
            │                       
            │                           
            ▼                      
┌─────────────────────────┐       
│   Statement             │               
│                         │      
│ -prints statement       │       
│                         │       
│                         │                            
└─────────────────────────┘       


## 2. Design of classes in more detail
 ```javascript
 class Account {
    constructor() {
        this.balance = 0;
        this.transactionHistory = [];
    }

    deposit(amount){
        //adds to balance
        //pushes to transaction history
    }

    withdraw(amount){
        //submits from balance
        //pushes to transaction history

    }

    printStatement{
        //passes in transaction history and balance and calls .print()
        
        
    }
    
 }


 class Statement {
    constructor(transactionHistory){
        this.transactions = transactionHistory;

    }

    print {
        //prints the banks statement using this.transactions
    
    }
    
 }
 
 ```
 







