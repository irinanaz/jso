/* super, polymorfisme */

class Animal {
    constructor(public name: string) {  }
}

class Rhino extends Animal {
    constructor() { 
        super("Rhino"); // ctor van basisklasse oproepen
    }
}

class Employee {
    constructor(public name: string) {  }
}

let animal: Animal = new Animal("Goat");
let rhino: Rhino = new Rhino();
let employee: Employee = new Employee("Bob");

animal = rhino;  // een object van een subklasse kan gebruikt worden
// waar een object van de basisklasse verwacht wordt
// animal = employee; // compileerfout;