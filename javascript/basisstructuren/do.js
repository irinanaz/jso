'use strict';

var i;
i = 1;
do {
    console.log(i); // toon 1 als eerste, van 1 tem 10
    ++i;// optelt en dan vergelijkt met while waarde . hier speelt de prefix of postfix geen rol op scherm
} while (i <= 10);
i=1;
do {
    console.log(i++); // toon 1 als eerste, en dan op telt, van 1 tem 10 
} while (i <= 10);