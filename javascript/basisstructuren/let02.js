// bron: https://egghead.io/lessons/the-let-keyword?course=learn-es6-ecmascript-2015

"use strict";

var fs = [];
for(var i =0; i<10; i++){
	fs.push( () => console.log(i) );
}
/**/console.log(fs[0])
/*
for(var teller=0; teller< fs.length;teller++){
	 var f = fs[teller];
	 f();
	// korter:
	//fs[teller]();
}
*/
// korter met forEach:
fs.forEach( f => f());  // 10 keer 10

var fs2 = [];
for(let i2 =0; i2<10; i2++){
	fs2.push( () => console.log(i2) );
}
fs2.forEach( f => f());  // 0,1,2,3,...,9
