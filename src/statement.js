class Statement {
    constructor() {
        this.statementContent = "date || credit || debit || balance";

    }

    print(transactions) {
        transactions.reverse().forEach(transaction => {
            if(transaction.type === "deposit"){
            this.statementContent += `\n${transaction.date} || ${transaction.amount} ||  || ${transaction.runningBalance}`;
            }else if(transaction.type === "withdrawal") {
            this.statementContent += `\n${transaction.date} ||  || ${transaction.amount} || ${transaction.runningBalance}`;
            }
        })
        return this.statementContent;

    }

}

module.exports = Statement;