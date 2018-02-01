/* super, polymorfisme */

class Animal {
    constructor(public name: string) {  }
}

class Rhino extends Animal {
    constructor() { 
        super("Rhino"); // ctor van basisklasse oproepen  // geeft een waarde aan parameters van basisklasse
    }
}

class Employee {
    constructor(public name: string) {  }
}

let animal: Animal = new Animal("Goat");
let rhino: Rhino = new Rhino();
let employee: Employee = new Employee("Bob");

console.log(animal, rhino, employee);
// Animal { name: 'Goat' } Rhino { name: 'Rhino' } Employee { name: 'Bob' }

animal = rhino;  // een object van een subklasse kan gebruikt worden
console.log(animal, rhino, employee);
// Rhino { name: 'Rhino' } Rhino { name: 'Rhino' } Employee { name: 'Bob' }

// waar een object van de basisklasse verwacht wordt
// animal = employee; // compileerfout;