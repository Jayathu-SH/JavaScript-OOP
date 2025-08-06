class Employee{
    constructor(name, role){
        this.name=name;
        this.role=role;
    }

    describe(){
        return(`${this.name} is a ${this.role}`);
    }
}

class Manager extends Employee{
    constructor(name,department){
        super(name,"Manager");
        this.department=department;
    }

    describe(){
        return(`${super.describe()} in ${this.department} department`);
    }
}

const manager1 = new Manager("Jaye","IT");
console.log(manager1.describe());