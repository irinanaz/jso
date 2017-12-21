var map = null;
var urlA = "http://datasets.antwerpen.be/v4/gis/museumoverzicht.xml";
var urlB = "http://opendata.brussel.be/api/records/1.0/search/?dataset=musea-in-brussel";
var recordsA=new Array();
var recordsB=new Array();
// var maxLengtA;
var maxLengthB;
window.onload = function(){
    //loadXMLHttpRequest();
    lengthOphalen(urlB);
    dataOphalenXML(urlA);
    
};
function Museum (stad,naam,adres,lat,lng) {
	this.stad = stad;
	this.naam = naam;
    this.lat = lat;
    this.lng = lng;
}
var alleMusea = [];


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

function lengthOphalen(url){  //Brussel
    
    var xmlHttp =  loadXMLHttpRequest();
    if (xmlHttp) {
        xmlHttp.open("GET", url);
        xmlHttp.onreadystatechange = function () {
             if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var jsonDoc = JSON.parse(xmlHttp.responseText);
                maxLengthB = jsonDoc.nhits;
                url = urlB + "&rows=" + maxLengthB;
                dataOphalenJSON(url); 
             } 
        }
        xmlHttp.send();
    }
}


function showMap(mapId,lat,lng) {
	var googleLatAndLong = new google.maps.LatLng(lat,lng);
	var mapOptions = {
		// zoom: 10,
        zoom: 14,
		center: googleLatAndLong,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapDiv = document.getElementById(mapId);
    map = new google.maps.Map(mapDiv, mapOptions);
    return map;

	
	// addMarker(map, googleLatAndLong);

}
function setaAllPinsB(mapId,records,map){
    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        var lat = record.fields.latitude_breedtegraad; 
        var lng = record.fields.longitude_lengtegraad;
        var googleLatAndLong = new google.maps.LatLng(lat,lng);
       
        var mapDiv = document.getElementById(mapId);
	    // map = new google.maps.Map(mapDiv, mapOptions);
        var title = record.fields.naam_van_het_museum;
        var content = record.fields.adres;
        addMarker(map, googleLatAndLong,title,content);
    }
}
function setaAllPinsA(mapId,records,map){
    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        var lat = record.getElementsByTagName("point_lat")[0].innerHTML; 
        var lng = record.getElementsByTagName("point_lng")[0].innerHTML;
        var googleLatAndLong = new google.maps.LatLng(lat,lng);
        
        // var mapDiv = document.getElementById(mapId);
	    // map = new google.maps.Map(mapDiv, mapOptions);
        var title  = record.getElementsByTagName("naam")[0].innerHTML;
        var content = record.getElementsByTagName("straat")[0].innerHTML +", "+record.getElementsByTagName("huisnummer")[0].innerHTML;
        addMarker(map, googleLatAndLong,title,content);
    }
}

function addMarker(map, latlong,title,content) {
	var markerOptions = {
		position: latlong,
		map: map,
		title: title,
		clickable: true
	};
	var marker = new google.maps.Marker(markerOptions);

	var infoWindowOptions = {
        
		content: title + "<br/>" +content,
		position: latlong
	};

	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(map);
	});
}


function dataOphalenJSON(url){  //Brussel
    
    var xmlHttp =  loadXMLHttpRequest();
    if (xmlHttp) {
        xmlHttp.open("GET", url); // false is afgeraden. want het vertraagd de aanvraag
        xmlHttp.onreadystatechange = function () {
             if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var jsonDoc = JSON.parse(xmlHttp.responseText);
                recordsB = jsonDoc.records;
                var latC = jsonDoc.records[0].fields.latitude_breedtegraad;
                var lngC = jsonDoc.records[0].fields.longitude_lengtegraad;
                var map = showMap("mapB",latC,lngC);
                setaAllPinsB("mapB",recordsB,map);
                fillTableB(recordsB);
                fillArrayB(recordsB);
             } 
        }
        xmlHttp.send();
    }
}
function dataOphalenXML(url){ //Antwerpen 
    
    var xmlHttp =  loadXMLHttpRequest();
    if (xmlHttp) {
        xmlHttp.open("GET", url); // false is afgeraden. want het vertraagd de aanvraag
        xmlHttp.onreadystatechange = function () {
             if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                
                var xmlDoc = xmlHttp.responseXML;
                recordsA = xmlDoc.getElementsByTagName("record");
                var latC = xmlDoc.getElementsByTagName("point_lat")[3].innerHTML;
                var lngC = xmlDoc.getElementsByTagName("point_lng")[3].innerHTML;

                var map = showMap("mapA",latC,lngC);
                setaAllPinsA("mapB",recordsA,map);
                fillTableA(recordsA);
                fillArrayA(recordsA);
             } 
        }
        xmlHttp.send();
    }
} 
   
function fillArrayB(records){
    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        var stad = record.fields.gemeente;
        var naam = record.fields.naam_van_het_museum;
        var adres = record.fields.adres;
        var lat = record.fields.latitude_breedtegraad; 
        var lng = record.fields.longitude_lengtegraad;
        var museum =new Museum(stad,naam,adres,lat,lng);
        alleMusea.push(museum);
    }
}
function fillTableB(records){
  
    var tabel = document.getElementById("Tabel");
    
    // tabel.innerHTML="";
    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        var stad = record.fields.gemeente;
        var naam = record.fields.naam_van_het_museum;
        var adres = record.fields.adres;
        var nieuweRij = tabel.insertRow(-1);
                    
        var celStad = nieuweRij.insertCell(0);
        celStad.innerHTML = stad;
        var celNaam = nieuweRij.insertCell(1);
        celNaam.innerHTML = naam;
        var celAdres = nieuweRij.insertCell(2);
        celAdres.innerHTML = adres;
        
                    
    }
}

function fillArrayA(records){
    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        var stad = "Antwerpen"; 
        var naam = record.getElementsByTagName("naam")[0].innerHTML;
        var adres = record.getElementsByTagName("straat")[0].innerHTML +", "+record.getElementsByTagName("huisnummer")[0].innerHTML;
        var lat = record.getElementsByTagName("point_lat")[0].innerHTML; 
        var lng = record.getElementsByTagName("point_lng")[0].innerHTML;
        var museum =new Museum(stad,naam,adres,lat,lng);
        alleMusea.push(museum);
    }
}
function fillTableA(records){
  
    var tabel = document.getElementById("Tabel");
    
    //tabel.innerHTML="";
    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        var stad = "Antwerpen"; 
        var naam = record.getElementsByTagName("naam")[0].innerHTML;
        var adres = record.getElementsByTagName("straat")[0].innerHTML +", "+record.getElementsByTagName("huisnummer")[0].innerHTML; 
        
        var nieuweRij = tabel.insertRow(-1);
        var celStad = nieuweRij.insertCell(0);
        celStad.innerHTML = stad;
        var celNaam = nieuweRij.insertCell(1);
        celNaam.innerHTML = naam;
        var celAdres = nieuweRij.insertCell(2);
        celAdres.innerHTML = adres;
        
                    
    }
}





