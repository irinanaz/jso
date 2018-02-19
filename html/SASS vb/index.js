'use strict';
var sass = require('node-sass');
var fs = require("fs");

sass.render({

    file: 'scss/style.scss',
    outputStyle: 'expanded',
    sourceComments: true

}, function(err, result){
    if(!err){
        fs.writeFile('css/style.css', result.css, function (err){
            if(!err){
                console.log('Klaar!');

            }else {console.log('Fout bij scchrijven:'+ err);
            }
        })
    }else{
        console.log('Er was een fout bij de creatie van :' + err);
    }
})