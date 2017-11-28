'use strict';



Number.pad = function (num, size, char){
	var sTmp = ""+num;
	while (sTmp.length < size) {
        sTmp = char + sTmp;
       
    } return sTmp;
}

var getal =5;
console.log(Number.pad(getal,2, '0'));
getal = 10;
console.log(Number.pad(getal,2, '0'));
getal = 100;
console.log(Number.pad(getal,2, '0'));
console.log(Number.pad(getal,4, '0'));
// var s = Number.pad(12, 4,'0');
// console.log(s);
