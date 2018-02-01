/* subklasse */
/* */

class Persoon{
    constructor(public voornaam: string, public naam: string){
    }
}

/* elke student IS EEN persoon */
/* en erft alle velden en methodes van basisklasse Persoon */
/* INHERITANCE (OVERERVING) */
class Student extends Persoon{
    opleiding: string;
    protected /*private*/ studentNr: string = "NN"; // protected is private , behalve voor de sub klassen
 
}

class ErasmusStudent extends Student{
    wijzigStudentNr(nieuwNr: string):void{
        this.studentNr = nieuwNr; // fout want hier niet bekend : studentNr is private in Student --> protected
    }
}

class Docent extends Persoon{
    private loon: number = 5000;
    verhoogLoon (bedrag: number){
        this.loon += bedrag;
    }
}
let student = new Student("Jos", "Vermeulen");
student.voornaam += "ke";   // Student erft voornaam van Persoon
student.opleiding = "informatica";
console.log(student);


// - incapsulation (met{ }  )
// - information hiding ( bv met private )
// - inheritance (overerving)

let chloe: ErasmusStudent = new ErasmusStudent("Chloe", "Claes");
chloe.opleiding = "FEO";
chloe.voornaam="Chloe";
console.log(chloe);

let docent: Docent = new Docent("Prof", "Gobelijn");
docent.verhoogLoon(100000);
console.log(docent);  // loon w niet getoond want loon is private