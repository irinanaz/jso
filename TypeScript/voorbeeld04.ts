// type assertions (type cast)
// type assertions vertellen de compiler dat hij de programmeur
// moet vertrouwen omdat die zeker is over het type van een var
// het heeft geen effect op de uitvoering, maar laat 
// juistere/meer gedetailleerde codecompletion toe

let smurf: any = "grote smurf";  // any => no typechecking on smurf
smurf = 10;

let groteSmurf = smurf.toUpperCase();   // ok voor compiler
console.log(groteSmurf);  // kan fout lopen tijdens uitvoering

// type assertion - manier 1
let safeGroteSmurf = (<string>smurf).toUpperCase();
console.log(safeGroteSmurf);

// type assertion - manier 2
let safeGroteSmurf2 = (smurf as string).toUpperCase();
console.log(safeGroteSmurf2);