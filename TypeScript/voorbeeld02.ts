/* ter kennismaking: interface, class */
// interface - dat is constructor
interface Persoon{  // Dat is enkele beschrijving dus naam en klasse van de var - dus ook GEEN WAARDE
    naam: string;   // Dat is een nieuwe soort van TYPE met eigenschappen naam en voornaam
    voornaam: string;
}

function greeter(persoon: Persoon){  // type interface van een parameter voor een GEWONE functie
    return "Hello, " + persoon.voornaam + " " + persoon.naam;
}
// definitie van variabele van type Persoon en de waardes - object met de juiste aantal parameters van de juiste type
var persoon: Persoon = { voornaam: "Joske", naam: "Vermeulen"};  
console.log(greeter(persoon));

class Student {  // nieuwe constructor op basis van al bestaande type (interface Persoon)
    volledigeNaam: string;
    /* public voor param in ctor zorgt ervoor dat autom. property met die naam gemaakt wordt */
    constructor(public voornaam, public middelNaam, public naam) { // automatisch deze params w gemaakt
        this.volledigeNaam = voornaam + " " + middelNaam + " " + naam;
    }  //  volledigeNaam w gevormd binnen{}
}

var student: Student = new Student("Joske", "T.B.", "Vermeulen"); // object / instansie van class Student
console.log(student.volledigeNaam);
console.log(greeter(student));

// class KlaaseType {
//     propertyNaam1 : Type;
//     ...  meerdere properties;
//     constructor( parameter1: type, parameter2: type2,...)  { ..... }
//     methodNaam1 (param1:type, param2:type,...):returntype { ..... }
// }

// van interface kan je geen new maken, je moet dat via class doen