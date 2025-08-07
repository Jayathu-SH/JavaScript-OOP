class BankAccount{
    #balance=0;

    constructor(accountHolder){
        this.accountHolder=accountHolder;
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
        }
    }

    withdraw(amount){
        if(amount<=this.#balance){
            this.#balance -= amount;
        }else{
            console.log("Insufficient funds.")
        }
    }

    getBalance(){
        return this.#balance;
    }
}

const account=new BankAccount("Jayathu");
account.deposit(1000);
account.withdraw(400);
console.log("Balance:", account.getBalance());

