var xmlHttp = false;

var url;
var records=new Array();
var maxLength;
window.onload = function(){
    loadXMLHttpRequest();
    
    
    document.getElementById("zoekTerm").onclick = zoeken;
    
};


function loadXMLHttpRequest() {
    try {  // Firefox/Opera/Safari/IE7+
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        try { // IE5
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try { // IE6
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                alert("Deze browser ondersteunt geen AJAX");
            }
        }
    }
}

function dataOphalen(url) {
    if (xmlHttp) {
        xmlHttp.open("GET", url);
        xmlHttp.onreadystatechange = function () {
            if( xmlHttp.readyState !=4){
                document.getElementById("Tabel").innerHTML = "<tr>pagina wordt geladen</tr>";    
            }
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var jsonDoc = JSON.parse(xmlHttp.responseText);
                records = jsonDoc.records;
                document.getElementById("Tabel").innerText="";
                document.getElementById("Tabel").innerHTML="";

                fillTable(records);
            } 
        }
        xmlHttp.send();
    }  
}     

function fillTable(records){
  
    var tabel = document.getElementById("Tabel");
    
    tabel.innerHTML="";
    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        var naam = record.fields.nom;
        var functie = record.fields.functie;
        var datum = record.fields.date;
                    
        var nieuweRij = tabel.insertRow(-1);
                    
        var celNaam = nieuweRij.insertCell(0);
        celNaam.innerHTML = naam;
        var celFunctie = nieuweRij.insertCell(1);
        celFunctie.innerHTML = functie;
        var celDatum = nieuweRij.insertCell(2);
        var options = {year:'numeric',month:'long',day:'numeric'};
        var date = new Date(datum);
        celDatum.innerHTML = date.toLocaleDateString('nl-NL',options);
                    
    }
}
function bepaalMax(){
    let url = "https://opendata.brussel.be/api/records/1.0/search/?dataset=ereburgers1&rows=1";
    if (xmlHttp) {
        xmlHttp.open("GET", url, false); // false is afgeraden. want het vertraagd de aanvraag
        xmlHttp.onreadystatechange = function () {
             if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var jsonDoc = JSON.parse(xmlHttp.responseText);
                maxLength = jsonDoc.nhits;
                
             } 
        }
        xmlHttp.send();
    }
}
function telPaginas(){
    var gevrAantal=document.getElementById("idPagina").value;
    var aantalPaginas= Math.floor(maxLength/gevrAantal)+1;
    for (var i =0; i<aantalPaginas;i++){
        maakLink();
    }
}
function maakLink(){
    document.getElementById("idLinks")
}
function zoeken(){
    bepaalMax();
    telPaginas();
    var url = maakRaquest();
    loadXMLHttpRequest();
    dataOphalen(url);
    //fillTable(records);
}
function maakRaquest(){
    // /api/records/1.0/search/?dataset=ereburgers1&q=lied&rows=35
    var url="https://opendata.brussel.be/api/records/1.0/search/?dataset=ereburgers1&";
    var zoekTerm = "q="+ document.getElementById("idZoekTerm").value;
    var max = document.getElementById("idPagina").value;
    if (max=="") max=maxLength;
    var rows = "&rows="+ max;
    url = url+zoekTerm+ rows;
    return url;
}
// function dataOphalenFull(url) { //
    
//     if (xmlHttp) {
//         xmlHttp.open("GET", url);
//         xmlHttp.onreadystatechange = function () {
//             if( xmlHttp.readyState !=4){
//                 document.getElementById("Tabel").innerHTML = "<tr>pagina wordt geladen</tr>";
                
//             }
//             if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//                 var jsonDoc = JSON.parse(xmlHttp.responseText);
//                 //var xmlDoc = xmlHttp.responseXML;
//                 var records = jsonDoc.records;
//                 var tabel = document.getElementById("Tabel");
//                 var rijen = document.getElementsByTagName("tr");

//                 document.getElementById("Tabel").innerText="";
//                 document.getElementById("Tabel").innerHTML="";
//                 // while(rijen.length > 1){
//                 //     tabel.children[0].removeChild(rijen[1]);
//                 // }
//                 document.getElementById("Tabel").innerHTML ="<thead><tr><th>naam</th><th>functie</th><th>datum</th></tr></thead>";
//                 //var j=0;
//                 for (var i = 0; i < records.length; i++) {
//                     var record = records[i];
//                     var naam = record.fields.nom;
//                     var functie = record.fields.functie;
//                     var datum = record.fields.date;
//                     //if(record.luiertafel == "ja"){
//                     var nieuweRij = tabel.insertRow(i + 1);
//                     //j++;
//                     var celNaam = nieuweRij.insertCell(0);
//                     celNaam.innerHTML = naam;
//                     var celFunctie = nieuweRij.insertCell(1);
//                     celFunctie.innerHTML = functie;
//                     var celDatum = nieuweRij.insertCell(2);
//                     var options = {year:'numeric',month:'long',day:'numeric'};
//                     var date = new Date(datum);
//                     celDatum.innerHTML = date.toLocaleDateString('nl-NL',options);
//                     //}
//                 }
//             }
//         }
//         xmlHttp.send();
//     }
// }
