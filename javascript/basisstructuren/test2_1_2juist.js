'use strict';

// onderstaand script moet de getallen van 1 t.e.m. 5
// toevoegen aan tabel1
var tabel1 = []
for(var getal=1; getal<=5; getal++) /**/
{
    tabel1.push(getal);
}
console.log(tabel1);  // gewenste output: [ 1, 2, 3, 4, 5 ]

// deze functie moet het kleinste van de doorgegeven argumenten teruggeven
function min(){
    var kleinste;
    if (arguments.length > 0){
         kleinste = arguments[0];
         for(var i=1; i<arguments.length; i++){
             if(arguments[i] < kleinste){
                 kleinste = arguments[i];
             }
         }
         return kleinste;
    }
}
var tabel2 = [3,5,1,6,9];
/**/console.log(min(...tabel2)) // gewenste output: 1 

// deze functie moet het aantal elementen in een twee-dim array teruggeven
function aantalElementen(tabel){
    var aantal = 0;
    for(var i=0; i < tabel.length; i++){
        for(var j=0; j < tabel[i].length; j++){
            aantal++;
        }
    }
    return aantal;
}
var rij1 = [1,2,3];
var rij2= [4,5];
var rij3 = [6,7,8,9,10];
var t = [rij1, rij2, rij3];
console.log(aantalElementen(t));  // gewenste output: 10

// deze functie moet de afstand tussen twee punten met coordinaten (x1,y1) en (x2,y2) 
// teruggeven
function afstand(x1,y1,x2,y2){
    var tmp1 = Math.pow(x1-x2,2);
    var tmp2 = Math.pow(y1-y2,2);
    var result = Math.sqrt(tmp1 + tmp2);
    /**/return result;
}
console.log(afstand(4,6,1,2));  // gewenste output: 5 

// deze functie moet het doorgegeven woord achterstevoren teruggeven
function reverse(woord){
    var result = "";
    for(var i=woord.length-1; i>= 0;i--){
        result += woord.charAt(i);
    }
    return result;
}
console.log(reverse("klop"));  // gewenste output: polk
