'use strict';
const FILENAME1 = "ploeg.xml";
const FILENAME2 = "oef2.xml";
const FILENAME4 = "oef4.xml";
const FILENAME5 = "oef5.xml";
const FILENAME6b = "oef6b.xml";
const FILENAME7 = "oef7.xml";

window.onload = function(){
   
    document.getElementById("idOef1").onclick = runOef1;
    document.getElementById("idOef2").onclick = runOef2;
    document.getElementById("idOef3").onclick = runOef3;
    document.getElementById("idOef4").onclick = runOef4;
    document.getElementById("idOef5").onclick = runOef5;
    document.getElementById("idOef6").onclick = runOef6;
    document.getElementById("idOef6b").onclick = runOef6b;
    document.getElementById("idOef7").onclick = runOef7;
}

function runOef7(){
    geefGemLoon7("marketing", FILENAME7);
}
function geefGemLoon7(afdeling, filenaam){
    var doc = loadXMLDoc(filenaam);
    var totaal =0;
    var aantal= 0;
   
    var afd =doc.getElementsByTagName("afdeling");
    for (var a=0; a< afd.length; a++){
        console.dir(afd.length);
        if (afd[a].getAttribute("id") == afdeling){
            for (var i = 0; i< afd[a].getElementsByTagName("arbeider").length; i++){
                var loon=afd[a].getElementsByTagName("arbeider")[i].getElementsByTagName("loon")[0].textContent;
                totaal += parseFloat(loon);
                aantal+=1;
                }
            }
        }
    
    alert (totaal/aantal);
}
function runOef6b(){
    geefGemLoon6b("magazijn", FILENAME6b);
}
function geefGemLoon6b(afdeling, filenaam){
    var doc = loadXMLDoc(filenaam);
    var totaal =0;
    var aantal= 0;
   
    var afd =doc.getElementsByTagName("afdeling");
    for (var a=0; a< afd.length; a++){
        console.dir(afd.length);
        if (afd[a].getAttribute("id") == afdeling){
            for (var i = 0; i< afd[a].children.length; i++){
                if (afd[a].children[i].nodeName == "arbeider"){
                totaal += parseFloat(afd[a].children[i].attributes[0].value);
                aantal+=1;
                }
            }
        }
    }
    alert (totaal/aantal);
}
function runOef6(){
    geefGemLoon("magazijn", FILENAME5);
}
function geefGemLoon(afdeling, filenaam){
    var doc = loadXMLDoc(filenaam);
    var totaal =0;
    var aantal= 0;
    var afd = doc.getElementById(afdeling);
    console.dir(afd);
    for (var i = 0; i< afd.children.length; i++){
        if (afd.children[i].nodeName == "arbeider"){
        totaal += parseFloat(afd.children[i].attributes[0].value);
        aantal+=1;
        }
    }
    alert (totaal/aantal);
}
function runOef5(){
    geefLoon("magazijn", FILENAME5);
}
function geefLoon(afdeling, filenaam){
    var doc = loadXMLDoc(filenaam);
    var totaal =0;
    var afd = doc.getElementById(afdeling);
    console.dir(afd);
    for (var i = 0; i< afd.children.length; i++){
        if (afd.children[i].nodeName == "arbeider"){
        totaal += parseFloat(afd.children[i].attributes[0].value);
        }
    }
    alert (totaal);
}
function runOef1(){
    var docPloeg = loadXMLDoc(FILENAME1);
    alert("aantal spelers " + docPloeg.documentElement.children.length);
}

function runOef2(){
    var docWerknemers = loadXMLDoc(FILENAME2);
    alert("aantal werknemers " + docWerknemers.documentElement.children.length);
}

function runOef3(){
    var docWerknemers = loadXMLDoc(FILENAME2);
    var aantal = docWerknemers.getElementsByTagName("werknemer").length;
    var totaal = 0;
    // alert("aantal werknemers " + aantal);
    for (var i = 0; i< aantal; i++){
        totaal += parseFloat(docWerknemers.getElementsByTagName("werknemer")[i].attributes[1].value);
    }
    alert("totaal loon: " + totaal);
}
function runOef4(){
    var docWerknemers = loadXMLDoc(FILENAME4);
    var aantal = docWerknemers.getElementsByTagName("werknemer").length;
    var totaal = 0;
    for (var i = 0; i< aantal; i++){
        var loon = parseFloat(docWerknemers.getElementsByTagName("werknemer")[i].attributes[1].value);
        if (docWerknemers.getElementsByTagName("werknemer")[i].attributes[2]){
            var valuta = docWerknemers.getElementsByTagName("werknemer")[i].attributes[2].value;
                if ( valuta == "BEF"){
                loon = toEUR(loon);
            }
        }
        totaal += loon;
    }
    alert("totaal loon: " + totaal+ " EUR");
}
function toEUR(bedrag){
    return bedrag / 40.3399;
}