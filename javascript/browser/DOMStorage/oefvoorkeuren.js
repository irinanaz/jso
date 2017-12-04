'use strict';
window.onload = function () {
    loadImage();
    loadFont();
    loadColor();
    document.getElementById("idBeeld").onchange = changeImage;
    document.getElementById("idFontstyle").onchange = changeFont;
    document.getElementById("idKleur").onchange = changeColor;
}
function loadImage(){
    var beeld = JSON.parse(localStorage.getItem('beeld'));
    if (beeld) {
        var myImage = beeld.beeld;
        // document.getElementById("beeld").src = "images/" + myImage + ".png";
    } else {
        var myImage = 'crocodile';
    }
    document.getElementById("beeld").src = "images/" + myImage + ".png";
}

function loadFont(){
    var font = JSON.parse(localStorage.getItem('font'));
    
    if(font){
        var myFont=font.font;
        
    } else {
        var indx = document.getElementById("idFontstyle").selectedIndex;
        var myFont = document.getElementById("idFontstyle")[indx].value;
        
    }
    document.body.style.fontFamily = myFont;
}
function loadColor(){
    var kleur = JSON.parse(localStorage.getItem('kleur'));
    if(kleur) {
        var myColor = kleur.kleur;
        //document.body.style.background = myColor;
    } else{
        var myColor = document.getElementById("idKleur").value;
        
    }
    document.body.style.background = myColor;
}
function changeFont() {

    var indx = document.getElementById("idFontstyle").selectedIndex;
    var myFont = document.getElementById("idFontstyle")[indx].value;
    localStorage.setItem('font', JSON.stringify({ "font": myFont }));
    document.body.style.fontFamily = myFont;
}
function changeColor() {
    var myColor = document.getElementById("idKleur").value;
    localStorage.setItem('kleur', JSON.stringify({ "kleur": myColor }));
    document.body.style.background = myColor;
}
function changeImage() {

    var indx = document.getElementById("idBeeld").selectedIndex;
    var myImage = document.getElementById("idBeeld")[indx].value;
    localStorage.setItem('beeld', JSON.stringify({ "beeld": myImage }));
    document.getElementById("beeld").src = "images/" + myImage + ".png";
}