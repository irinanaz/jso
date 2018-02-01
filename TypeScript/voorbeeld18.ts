/* iterators */

let getallen: number[] = [1,2,3,4,5,6,7,8,9];

// toon waarden in getallen
for(let getal of getallen){
    console.log(getal);
}

// toon indexen/keys in getallen
for(let getal in getallen){
    console.log(getal);
}