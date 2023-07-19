class Statement {
    constructor() {
        this.statementContent = "date || credit || debit || balance";

    }

    print(transactions) {
        transactions.reverse().forEach(transaction => {
            let amount = transaction.amount.toFixed(2);
            let balance = transaction.runningBalance.toFixed(2);
            if(transaction.type === "deposit"){
            this.statementContent += `\n${transaction.date} || ${amount} ||  || ${balance}`;
            }else if(transaction.type === "withdrawal") {
            this.statementContent += `\n${transaction.date} ||  || ${amount} || ${balance}`;
            }
        })
        return this.statementContent;

    }

}

module.exports = Statement;