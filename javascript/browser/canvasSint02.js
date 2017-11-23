'use strict';
var canvas, context, topx;

window.onload = function () {
    setInterval(drawSint, 1000);
};

function drawSint() {
    canvas = document.getElementById("mijnCanvas");
    context = canvas.getContext("2d");
    // er is nog geen 3D canvas; d.i. om de code "futureproof" te maken
    topx = canvas.clientWidth / 2;

    // context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);  // alles wissen
    context.fillStyle = "#ccffff";
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    drawCoat();
    drawFace();
    drawMiter2();
    drawImage("images/speelgoedzak.png",
        // Math.floor(Math.random() * (canvas.clientWidth - 150)),
        // Math.floor(Math.random() * (canvas.clientHeight - 150)), 
        canvas.clientWidth - 175,
        60,
        150, 150);
    drawText("yellow", "Dag sinterklaasje!", topx, canvas.clientHeight - 50);

    letItSnow();
}

function drawFace() {
    drawCircle("pink", topx, 320, 70);
    drawEyes();
    drawBeard2();
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

function drawLine(color, x1, y1, x2, y2, width) {
    context.strokeStyle = color;
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function drawImage(imgName, x, y, width, height) {
    var img = new Image();
    img.src = imgName;
    // images zijn niet altijd meteen geladen, daarom wachten we tot 
    // de prent helemaal geladen is voor we ze op het canvas tekenen:
    img.onload = function () {
        context.drawImage(img, x, y, width, height);
    }
}

function drawText(color, text, x, y) {
    context.fillStyle = color;
    context.font = "bold 2em sans-serif";
    context.textAlign = "center";
    context.fillText(text, x, y);
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
    drawLine("gold", topx - 120, 180, topx + 120, 180, 10);
    drawLine("gold", topx, 60, topx, 300, 10);
}


function drawCandy(color, x, y, radius) {
    drawCircle(color, x, y, radius);
    drawPolygon(color, [x + radius, y, x + 2 * radius, y - radius, x + 2 * radius, y + radius]);
    drawPolygon(color, [x - radius, y, x - 2 * radius, y - radius, x - 2 * radius, y + radius]);
}

function letItSnow() {
    for (var i = 0; i < 30; i++) {
        var x = Math.floor(Math.random() * canvas.width);
        var y = Math.floor(Math.random() * canvas.height);
        var radius = 5 + Math.floor(Math.random() * 10);
        //drawCandy(getRandomTransparentColor(), x, y, radius);
        drawCandy(getRandomRainbowColor(), x, y, radius);
    }
}

function getRandomTransparentColor() {
    return "rgba(" + getRandomColorPartNumber() + "," +
        getRandomColorPartNumber() + "," + getRandomColorPartNumber() + "," + Math.random() + ")";
}

function getRandomColorPartNumber() {
    return Math.floor(Math.random() * 256);
}

function getRandomRainbowColor() {
    return "hsl(" + Math.floor(Math.random() * 24) * 15 + ",100%,50%)";
}


/* onderstaande functies met dank aan Irina */
function drawBeard2() {
    drawPolygon("white", [topx - 60, 360, topx + 60, 360, topx, 520]);
}
function drawMiter2() {
    drawPolygon("red", [topx - 65, 298, topx - 100, 180, topx, 60, topx + 100, 180, topx + 65, 298]);
    drawLine("gold", topx - 98, 180, topx + 98, 180, 10);
    drawLine("gold", topx, 62, topx, 298, 10);
}

function drawCoat() {
    drawPolygon("red", [topx - 165, 600, topx - 100, 380, topx, 260, topx + 100, 380, topx + 165, 600]);
}