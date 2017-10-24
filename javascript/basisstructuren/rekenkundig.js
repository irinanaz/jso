'use strict';

var x = 1, y = 2, z = 3;
var som;
var resultaat1, resultaat2;

som = x + y;//3
console.log(som);
som = som + x;     //4
console.log(som);
som += x;        //5
console.log(som);
som++; //6
console.log(som);
console.log(som++);
console.log(som);
console.log(++som);// postfix-doe de rest van de instructies en dan +1 -> 6 komt op het scherm en som wordt 7
/*console.log(som++);// prefix - doet +1 en dan de rest van instructies  -> 8 komt op het scherm*/
console.log(som);

resultaat1 = x + y * z; 
console.log("zonder haakjes : " + resultaat1); //7
resultaat2 = (x + y) * z;//9
console.log("met haakjes : " + resultaat2);        