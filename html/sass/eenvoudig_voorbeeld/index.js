"use strict";
var sass = require("node-sass");
var fs = require("fs");
console.log("Ik wacht op wijzigingen...");
//fs.watch("assets/scss/style.scss", (event, filename) => {
    sass.render(
        {
            file: "assets/scss/style.scss",
            outputStyle: "expanded",
            sourceComments: true
        },
        (error, scssData) => {
            if (!error) {
                fs.writeFile("assets/css/style.css", scssData.css, (err) => {
                    if (!error) {
                        console.log("Klaar!");
                    } else {
                        console.log("Er was een error bij de create van css: " + err);
                    }
                })
            } else {
                console.log("Er was een fout bij het lezen van scss: " + error);
            }
        }

    );
//});