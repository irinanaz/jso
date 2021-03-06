

var url;
var records=new Array();
var maxLength;
window.onload = function(){
    loadXMLHttpRequest();
    
    
    document.getElementById("zoekTerm").onclick = zoeken;
    
};


function loadXMLHttpRequest() {
    var xmlHttp = false;
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
    return xmlHttp;
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

function telPaginas(){
    var gevrAantal=document.getElementById("idPagina").value;

    if( gevrAantal==""){
        gevrAantal = 10;}
    var aantalPaginas= Math.floor(maxLength/gevrAantal)+1;
    for (var i =0; i<aantalPaginas;i++){
        maakLink(i+1);
    }
}
function maakLink(nr){
    var links = document.getElementById("idLinks");
    var pagLink = document.createElement("a");
    pagLink.id = nr;
    pagLink.href = "";
    pagLink.innerText = nr;
    pagLink.onclick= function (e){e.preventDefault(); toonDeel(e);}
    
    links.appendChild(pagLink);
}
function toonDeel(e){
    var link = e.target;
    var url = maakRaquestLink(link.id);
    dataOphalenDefaut(url);
     //alert("link"+link.id);
}
function maakRaquestLink(id){
    let begin;
    let gevrAantal=document.getElementById("idPagina").value;
    if (gevrAantal==""){
        begin=(id-1)*10;
    }else begin=(id-1)*gevrAantal;
    var url="https://opendata.brussel.be/api/records/1.0/search/?dataset=ereburgers1&";
    var zoekTerm = "q="+ document.getElementById("idZoekTerm").value;
    var max = document.getElementById("idPagina").value;
    if (max=="") max=10;
    var rows = "&rows="+ max;
    url = url+zoekTerm+ rows+"&start="+begin;
    return url;
}
function zoeken(){
    
    var url = maakRaquest();
    
    dataOphalenDefaut(url);
    
}
function maakRaquest(){
    // /api/records/1.0/search/?dataset=ereburgers1&q=lied&rows=35
    var url="https://opendata.brussel.be/api/records/1.0/search/?dataset=ereburgers1&";
    var zoekTerm = "q="+ document.getElementById("idZoekTerm").value;
    var max = document.getElementById("idPagina").value;
    if (max=="") max=10;
    var rows = "&rows="+ max;
    url = url+zoekTerm+ rows;
    return url;
}

function dataOphalenDefaut(url){
    var totaalPaginas="";
    var xmlHttp =  loadXMLHttpRequest();
    if (xmlHttp) {
        xmlHttp.open("GET", url); // false is afgeraden. want het vertraagd de aanvraag
        xmlHttp.onreadystatechange = function () {
            if( xmlHttp.readyState !=4){
                document.getElementById("Tabel").innerHTML = "<tr>pagina wordt geladen</tr>";    
            }
             if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var jsonDoc = JSON.parse(xmlHttp.responseText);
                records = jsonDoc.records;
                document.getElementById("idLinks").innerHTML="";
                document.getElementById("Tabel").innerHTML="";
                maxLength = jsonDoc.nhits;
                if (totaalPaginas==""){
                telPaginas();}

                fillTable(records);
             } 
        }
        xmlHttp.send();
    }
}

// function dataOphalen(url) {
//     var xmlHttp = loadXMLHttpRequest();
//     if (xmlHttp) {
//         xmlHttp.open("GET", url);
//         xmlHttp.onreadystatechange = function () {
//             if( xmlHttp.readyState !=4){
//                 document.getElementById("Tabel").innerHTML = "<tr>pagina wordt geladen</tr>";    
//             }
//             if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//                 var jsonDoc = JSON.parse(xmlHttp.responseText);
//                 records = jsonDoc.records;
//                 document.getElementById("Tabel").innerText="";
//                 document.getElementById("Tabel").innerHTML="";
//                 maxLength = jsonDoc.nhits;
                
//                 fillTable(records);
//             } 
//         }
//         xmlHttp.send();
//     }  
// }     
