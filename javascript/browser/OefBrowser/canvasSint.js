'use strict';
//var canvas = document.getElementById("mijnCanvas"); // globaal voor alle functies in huidige .js

window.onload = restart;
//of om snoepen te verplatsen:
//window.onload = function(){
//    setInterval(drawSint, 1000);
//};
function restart(){
    drawSint();
    setTimeout(proper,10000);
    setInterval(drawSint, 10000);

}
function proper(){
    context.clearRect(0,0,canvas.clientWidth, canvas.clientHeight); 
}
var canvas, context, topX;

function drawSint() {
    canvas = document.getElementById("mijnCanvas");
    // console.log(canvas.clientWidth);
    // console.log(canvas.clientHeight);
    context = canvas.getContext("2d");
    // er is nog geen 3d , maar je moet 2d wel aanduiden.
    topX = canvas.clientWidth / 2;
    //topY = canvas.clientHeight/2;

    // canvas leeg te maken/ canvas wissen:
    //context.clearRect(0,0,canvas.clientWidth, canvas.clientHeight); 

    // achtergrond kleur:
    context.fillStyle = "#ccffff"; // kleur idem als in css. 
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    drawMantel();
    drawFace();
    drawEyes();
    drawNose();
    drawBeard();
    drawMouth();
    drawHat();
    drawImage("../images/speelgoedzak.png",
        Math.floor(Math.random() * (canvas.clientWidth - 350)),
        Math.floor(Math.random() * (canvas.clientHeight - 350)), 150, 150);
    drawText("blue", "Dag Sinterklasje", topX, canvas.clientHeight - 50);
    drawSnoep();
    snoepen();
    snoepenSnow();// dat moet weg bij snoepen te verplatsen
    setInterval(nooitTeVeel, 5000);
    
}
function nooitTeVeel(){
    var color = Math.floor(Math.random() * 5) + 1;
    switch (color) {
        case 1: color = "red"; break;
        case 2: color = "blue"; break;
        case 3: color = "pink"; break;
        case 4: color = "gold"; break;
        default: color = "yellow";

    }
    var posX = Math.floor(Math.random() * (canvas.clientWidth ));
    var posY = Math.floor(Math.random() * (canvas.clientHeight ));
    
    drawText("blue", "Noooi te veel SNOEPEN!!!", posX-150, posY-150);
}
function drawFace() {
    drawCircle("pink", topX, 320, 70);

}
function drawEyes() {
    drawCircle("white", topX - 25, 315, 10);
    drawCircle("white", topX + 25, 315, 10);
    drawCircle("black", topX - 25, 315, 5);
    drawCircle("black", topX + 25, 315, 5);

}
function drawNose() {
    drawCircle("red", topX, 335, 7);
}
function drawMouth() {
    drawBow("darkred", topX, 350, 20, Math.PI / 16, Math.PI - Math.PI / 16);
}
function drawBeard() {
    drawPolygon("white", [topX - 60, 360, topX + 60, 360, topX, 520]);
}
function drawHat() {
    drawPolygon("red", [topX - 65, 298, topX - 100, 180, topX, 60, topX + 100, 180, topX + 65, 298]);
    drawLine("yellow", topX - 98, 180, topX + 98, 180, 10);
    drawLine("yellow", topX, 62, topX, 298, 10);
}

function drawMantel() {
    drawPolygon("red", [topX - 165, 600, topX - 100, 380, topX, 260, topX + 100, 380, topX + 165, 600]);
}
 
function snoepenSnow() {
    setInterval(snoepen, 1000);
}
function snoepen() {
    var aantal = Math.floor(Math.random() * 10) + 5;

    for (var i = 1; i <= aantal; i++) {
        drawSnoep();
    }
}
function drawSnoep() {
    var color = Math.floor(Math.random() * 5) + 1;
    switch (color) {
        case 1: color = "lightgreen"; break;
        case 2: color = "blue"; break;
        case 3: color = "pink"; break;
        case 4: color = "gold"; break;
        default: color = "yellow";

    }
    var snoepX = Math.floor(Math.random() * (canvas.clientWidth ));
    var snoepY = Math.floor(Math.random() * (canvas.clientHeight ));
    var snoepR = Math.floor(Math.random() * 10) + 5;
    var verticesLinks = [snoepX - snoepR, snoepY, snoepX - 2 * snoepR, snoepY - snoepR, snoepX - 2 * snoepR, snoepY + snoepR];
    var verticesRight = [snoepX + snoepR, snoepY, snoepX + 2 * snoepR, snoepY - snoepR, snoepX + 2 * snoepR, snoepY + snoepR]
    drawCircle(color, snoepX, snoepY, snoepR);
    drawPolygon(color, verticesLinks);
    drawPolygon(color, verticesRight);

}

function drawImage(imgName, x, y, width, height) {
    var img = new Image();
    img.src = imgName;
    // images zijn niet altijd meteen geladen , 
    // daarom wachten we tot de prent helemaal geladen is voor we ze op het canvas tekenen.
    img.onload = function () {
        context.drawImage(img, x, y, width, height);
    }
}

function drawPolygon(color, vertices) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(vertices[0], vertices[1]);
    for (var i = 2; i < vertices.length; i += 2) {
        context.lineTo(vertices[i], vertices[i + 1]);
    }
    context.lineTo(vertices[0], vertices[1]);
    context.fill();
}
function drawCircle(color, x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
}
function drawBow(color, x, y, radius, begin, end) {
    context.beginPath();
    context.arc(x, y, radius, begin, end);
    context.fillStyle = color;
    context.fill();
}
function drawLine(color, x1, y1, x2, y2, widthL) {
    context.strokeStyle = color;
    context.lineWidth = widthL;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function drawText(color, text, x, y) {
    context.fillStyle = color;
    context.font = "bold 2em sans-serif"; // volgens css 
    context.textAline = "center";
    context.fillText(text, x, y);


}