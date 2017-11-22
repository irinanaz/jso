'use strict';
//var canvas = document.getElementById("mijnCanvas"); // globaal voor alle functies in huidige .js

window.onload = drawSint;
var canvas, context, topX;

function drawSint(){
    canvas = document.getElementById("mijnCanvas"); 
    // console.log(canvas.clientWidth);
    // console.log(canvas.clientHeight);
    context =  canvas.getContext("2d");
    // er is nog geen 3d , maar je moet 2d wel aanduiden.
    topX = canvas.clientWidth/2;
    //topY = canvas.clientHeight/2;

    // canvas leeg te maken/ canvas wissen:
    //context.clearRect(0,0,canvas.clientWidth, canvas.clientHeight); 

    // achtergrond kleur:
    context.fillStyle ="#ccffff"; // kleur idem als in css. 
    context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);
    drawFace();
    drawEyes();
    drawNose();
    drawBeard();
    drawMouth();
    drawHat();
}

function drawFace(){
    drawCircle("pink",topX,320,70);

}
function drawEyes(){
    drawCircle("white",topX-25,315,10);
    drawCircle("white",topX+25,315,10);
    drawCircle("black",topX-25,315,5);
    drawCircle("black",topX+25,315,5);

}
function drawNose(){
    drawCircle("red",topX,335,7); 
}
function drawMouth (){
    drawBow("darkred",topX, 350, 20,Math.PI/16, Math.PI - Math.PI/16);
}
function drawBeard(){
    drawPolygon("white",[topX-60,360,topX+60,360,topX,520]);
}
function drawHat(){
    drawPolygon("red",[topX-60,290,topX-120,180,topX,60,topX+120,180,topX+60,290]);

}
function drawPolygon(color,vertices){
    context.fillStyle=color;
    context.beginPath();
    context.moveTo(vertices[0],vertices[1]);
    for (var i=2;i<vertices.length;i+=2 ){
        context.lineTo(vertices[i],vertices[i+1]);
        }
    context.lineTo(vertices[0],vertices[1]);
    context.fill();
}
function drawCircle(color,x,y,radius){
    context.beginPath();
    context.arc(x,y,radius,0,2*Math.PI);
    context.fillStyle = color;
    context.fill();
}
function drawBow(color,x,y,radius, begin, end){
    context.beginPath();
    context.arc(x,y,radius,begin,end);
    context.fillStyle = color;
    context.fill();
}