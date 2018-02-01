/* type safe declaratie van variabelen */

let naam: string;
let getal: number;
let voorwaarde: boolean;

naam = "Joske";
naam = 100;  // compileerfout  - verkeerde type
getal = 100;
getal = "Joske";  // compileerfout - verkeerde type
getal = "123"; // compileerfout - verkeerde type - geen string
voorwaarde = 1 < 10;
voorwaarde = "true";  // compileerfout - verkeerde type - geen string

console.log(naam);   // 100
console.log(getal);  // 123
console.log(voorwaarde); // true - fout bij compilatie , maar wordt uitgevoerd door js en heeft de waarde van lijn13

// generics
let stringArray : Array<string> = new Array<string>();
stringArray[0] = "Jan";
stringArray[1] = 10;  // compileerfout - string van verkeerde type
console.log(stringArray);

// any
// => schakel typechecking uit ('opt-out' typechecking)
let onbekend: any;  // om zelf te bepalen de type van variable - zon minder mogelijk te gebruiken!
onbekend = "Hallo";
onbekend = 10.2;
onbekend = Math.random() > 0.5;
console.log(onbekend);

// returntype van function aangeven
function willekeurigBericht(): string{  // returntype
    let berichten: Array<string> = ["hallo", "nou moe", "en dan?", "boeit nie", "yeah"];
    let x: number = Math.floor(Math.random()*berichten.length);
    return berichten[x];
}

let bericht: string = willekeurigBericht();
console.log(bericht);
getal = willekeurigBericht();  // compileerfout

// function zonder return
// enkel undefined en null mogen toegekend worden aan een var van type void
function fieZonderReturn(): void{  // dat is voor de functie die heeft geen returntype instructies: als undefined
    console.log("Dit is een functie zonder return statement"); 
}   // dus geen commando return mogelijk

let result = fieZonderReturn();  
console.log(result);  // undefined