// bron: https://egghead.io/lessons/the-let-keyword?course=learn-es6-ecmascript-2015

"use strict";

//javascript p.69 -- Closures

var fs = [];
for(var i =0; i<10; i++){
	fs.push( () => console.log(i) );  //array met conlole.logs(i), console.log(i).. 10keer.
}
/**/console.log(fs[0])
fs.forEach( f => f());  // 10 keer 10

/** korter:
for(var teller=0, teller<fs.length;teller++) {
	var f = fs[teller];
	f();
	// korter:
	// fs[teller]();
}
 */
var fs2 = [];
for(let i2 =0; i2<10; i2++){
	fs2.push( () => console.log(i2) );  // zo krijgt de console.log zijn eigen i
}
fs2.forEach( f => f());  // 0,1,2,3,...,9