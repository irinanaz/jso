'use strict';

fie1();


function fie1(){
    console.log("fie1 wordt uitgevoerd");
}

function fie2(){
    console.log("nu wordt fie2 gedaan");
}

fie1();
// f();  // fout bij uitvoering; want f is nog niet gekend

// een function kan toegekend worden aan een var:
var f = fie1;
f();

f = function(){
    console.log("sorry... geen inspiratie voor deze anonieme fie")
};

f();

function fieMetFunctionAlsParameter(eenFunctie){
    console.log("zo meteen wordt een doorgegeven functie uitgevoerd");
    eenFunctie();
}

// een function kan gebruikt worden als argument:
fieMetFunctionAlsParameter(fie2);
fieMetFunctionAlsParameter(f);
fieMetFunctionAlsParameter( function(){
    console.log("een anonieme functie als argument van een function")
});

// het resultaat/de uitkomst van een function kan een function zijn
function fieMetFunctionAlsUitkomst(){
    var getal = Math.random();
    if(getal < 0.5){
        return fie2;
    }
    return function(){
        console.log("gelukkig is dit de laatste anonieme functie");
    };
}

var resultFie = fieMetFunctionAlsUitkomst();
resultFie();
console.log( fieMetFunctionAlsUitkomst()() );
