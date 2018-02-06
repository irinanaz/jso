/* super, abstract class */

abstract class Animal {  // abstract : compiler kijkt dat er geen object gemaakt 
    //kunnen worden van superklasse direct. Dus geen = new Animal, 
    // maar wel = new Snake, new Hoorse. 
    constructor(public name: string) { }
    move(distanceInMeters: number = 0) {
        console.log('%s moved %dm.', this.name, distanceInMeters);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) { //eigen definitie van al bestaande in superklasse
        console.log("Slithering...");
        super.move(distanceInMeters);// zoeken in basis klasse
    }  // als this.move dan zoket die een methode hier in subklasse en zo zitten we in oneindige lus
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam: Animal = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// let tim: Animal = 
//    new Animal("Timmy the dangerous ('all animals are dangerous')");  // compileerfout;
// want je kunt geen instantie van een abstracte klasse maken

let animals:Animal[] = []; // nieuw array van Animals = lege array;
animals[0]= new Snake("Sammie de slang");
animals[1]= new Snake ("Bijterke");
animals[2]=new Horse ("Amica");
animals[3]=new Horse("Black Beauty");
for  (let i=0;i<animals.length; i++ ){
    animals[i].move(); // elk animal van arrray moves op Eigen manier 
}

class Panda extends Animal{ // gewoon een nieuwe methode in subklasse MAG anders zij
    // als w ij willen dan een subklasse verplicht een methode bevat dan moeten 
    // we de methode van superklasse abstract maken - oef 14.

}