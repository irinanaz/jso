// zie ook https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/* deze file is samen met gebruik_mijnmodules.js*/

/*  In NodeJs bestaat impliciet een leeg object  exports
    module.exports is initieel een andere naam voor dat object
    (exports en module.exports verwijzen initieel naar hetzelfde object)
    var exports = module.exports = {}
*/

'use strict';

var v1 = 0;         // var ovor deze file alleen.
exports.v2 = 0;     // var voor andere files ook .

// exports => functie ter beschikking stellen van andere mijnmodule01
// !!! geen var of let voor exports
exports.helloInEnglish = function () {
    console.log("hello ... ");
    hello("hello again"); // oproep van functie hallo van lijn 22.
    v1++;
}

var hello = function (greeting) {
    console.log(greeting);
    exports.v2++;
}

exports.helloInDutch = function (aanspreking) {
    console.log("Dag,", aanspreking);
}