'use strict';
var canvas, context, topx;

window.onload = drawSint;

function drawSint() {
    canvas = document.getElementById("mijnCanvas");
    context = canvas.getContext("2d");
    // er is nog geen 3D canvas; d.i. om de code "futureproof" te maken
    topx = canvas.clientWidth / 2;

    // context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);  // alles wissen
    context.fillStyle = "#ccffff";
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    drawFace();
    drawMiter();
}

function drawFace() {
    drawCircle("pink", topx, 320, 70);
    drawEyes();
    drawBeard();
    drawMouth();
}

function drawCircle(color, x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
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

function drawEyes() {
    drawCircle("white", topx - 25, 315, 10);
    drawCircle("blue", topx - 25, 315, 5);
    drawCircle("white", topx + 25, 315, 10);
    drawCircle("blue", topx + 25, 315, 5);
}

function drawMouth() {
    context.beginPath();
    context.arc(topx, 350, 20, Math.PI / 16, Math.PI - Math.PI / 16);
    context.fillStyle = "darkred";
    context.fill();
}

function drawBeard() {
    drawPolygon("white", [topx - 60, 360, topx + 60, 360, topx, 520]);
}

function drawMiter() {
    drawPolygon("red", [topx, 60, topx + 120, 180, topx + 60, 300, topx - 60, 300, topx - 120, 180]);
}