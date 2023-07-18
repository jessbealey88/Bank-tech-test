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
    constructor(){
       

    }

    print {
        //prints the bank statement using this.transactions
    
    }
    
 }
 
 ```

 ## 4. Examples of integration tests

 ```javascript

 account = new Account();
 account.deposit(150);
 account.withdraw(30);
 expect(account.printStatement()).toEqual(
    //Correctly printed statement
 )

 ```

 ## 5. Examples of Unit tests
 ```javascript
 account = new account = new Account();
 account.deposit(150);
 account.withdraw(30);
 expect(account.transactionHistory.length).toEqual(2)

 statement = new Statement();
 transactions = [{date: "15/07/2023", credit: 150, debit: null, balance: 150},{date: "18/07/2023", credit: null, debit: 30, balance: 120}];
 expect(statement.print(transactions)).toEqual(
    //Correctly printed statement
 )
 ```


 







