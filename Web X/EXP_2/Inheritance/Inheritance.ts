interface Human{
    race : String;
    humanity();
}
interface Women{
    humble();
}

class Person {
    constructor(public firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
    
}

class Employee extends Person implements Human,Women{
    race = "Indian";
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {

        super(firstName, lastName);
    }

    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
    humanity() {
        return `${this.firstName} is ${this.race} and they show Humanity `;
    }
    humble() {
        return `${this.firstName} is Humble`;
    }
}

let emp1 = new Employee("Niyati", "Gaonkar", "Data Analyst");

console.log(emp1.describe());
console.log(emp1.humanity());
console.log(emp1.humble());