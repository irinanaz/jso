/* ter kennismaking: interface, class */

interface Persoon{
    naam: string;
    voornaam: string;
}

function greeter(persoon: Persoon){
    return "Hello, " + persoon.voornaam + " " + persoon.naam;
}

var persoon: Persoon = { voornaam: "Joske", naam: "Vermeulen"};
console.log(greeter(persoon));

class Student {
    volledigeNaam: string;
    /* public voor param in ctor zorgt ervoor dat autom. property met die naam gemaakt wordt */
    constructor(public voornaam, public middelNaam, public naam) {
        this.volledigeNaam = voornaam + " " + middelNaam + " " + naam;
    }
}

var student: Student = new Student("Joske", "T.B.", "Vermeulen");
console.log(student.volledigeNaam);
console.log(greeter(student));