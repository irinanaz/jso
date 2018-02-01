/* enum */

enum Werkdagen {
 MAANDAG, DINSDAG, WOENSDAG, DONDERDAG, VRIJDAG
}

let werkdag: Werkdagen = Werkdagen.MAANDAG;
console.log(werkdag);  // 0
console.log(Werkdagen[werkdag]); // MAANDAG

// Werkdagen.MAANDAG = 100; // compileerfout