'use strict';
var toetsenbord = require('readline-sync');
var uniekeGetallen = new Array (5);
var i=0,getal;

function sorteren(getallen) {
    var tmp = new Array;
    var tmpGetal = getallen[0];
    console.log( tmpGetal);
    var j;
    for (var i=1; i < getallen.lenght; i++){
        if (tmpGetal <= getallen[i]){
            tmp.push(getallen[i]);
        } else{ 
            for (j=tmp.length+1;j>i;j--){
                tmp.push(tmp[j-1]);
            }
            
        }
        console.log(getallen);
        console.log(tmp);/*i++*/    
         }
         return tmp;
    }


while (i<5){
     getal = parseInt(toetsenbord.question( "Geef een uniek getal in: "));
     if (uniekeGetallen.indexOf(getal)==-1){
         uniekeGetallen[i]=getal;
         i++;
     } else { 
         console.log( "Reeds ingegeven.");
     }
}
console.log (uniekeGetallen);

console.log(sorteren(uniekeGetallen));
console.log(sorteren(uniekeGetallen));


function sorterenPerGetal(getal) {
        var tmp = new Array;
        var tmpGetal = getallen[0];
        console.log( tmpGetal);
        var j;
        for (var i=1; i < getallen.lenght; i++){
            if (tmpGetal <= getallen[i]){
                tmp.push(getallen[i]);
            } else{ 
                for (j=tmp.length+1;j>i;j--){
                    tmp.push(tmp[j-1]);
                }
                
            }
            console.log(getallen);
            console.log(tmp);/*i++*/    
             }
             return tmp;
        }