'use strict';
const FILENAME10 = "itemspuur.xml";
const FILENAME11 = "oef11.html";
var doc = document.implementation.createDocument("","",null);

window.onload = function(){
   
    document.getElementById("idOef8").onclick = runOef8;
    document.getElementById("idOef9").onclick = runOef9;
    document.getElementById("idOef10").onclick = runOef10;
    document.getElementById("idOef11").onclick = runOef11;
    
}

function runOef11(){
    var xmlString = loadXMLText(FILENAME11);
    // var xmlString = "<smurfen>" +
    // "<smurf><naam>Grote Smurf</naam><omschrijving>leider van de smurfen</omschrijving><kenmerk>draagt als enige een rode broek en een rode muts</kenmerk></smurf>"+
    // "<smurf><naam>Smurfin</naam><omschrijving>vrouwelijke smurf</omschrijving><kenmerk>blond haar, wit jurkje</kenmerk></smurf>"+
    // "</smurfen>";
    var domParser = new DOMParser();
    /*  Volgens de documentatie van MDN (https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)
    is DOMParser "experimental", maar de huidige browsers ondersteunen DOMParser wel  */
    var doc = domParser.parseFromString(xmlString, "application/xml");
    var output = doc.documentElement.children.length + " " + doc.documentElement.nodeName + " geladen:";
    for(var i=0; i < doc.documentElement.children.length; i++){
        output += "\n" + doc.documentElement.children[i].firstChild.textContent;
    }
    alert(output);


    


}


function runOef10(){
    var doc = loadXMLDoc(FILENAME10);
    var prijzen = doc.getElementsByTagName("prijs");

    for (var i =0; i<prijzen.length; i++){
        prijzen[i].innerHTML = parseFloat(prijzen[i].textContent) * 1.05;
        console.dir( prijzen[i].textContent );
    }

}


function runOef8(){
    doc = document.implementation.createDocument("","",null); // of return doc op het einde;
    var newhtml = doc.createElement("html");
    var newHead = doc.createElement("head");
    var newTitle = doc.createElement("title");
    var titleText = doc.createTextNode("De Title");
    newTitle.appendChild(titleText);
    newHead.appendChild(newTitle);
    newhtml.appendChild(newHead);
    var newBody = doc.createElement("body");
    var newLabel = doc.createTextNode("De link:");
    var newLink = doc.createElement("a");
    var aHref = doc.createAttribute("href");
    aHref.value = "http://www.vdab.be";
    newLink.attributes.setNamedItem(aHref);
    var newLinkValue = doc.createTextNode("De VDAB");
    newLink.appendChild(newLinkValue);
    
    newBody.appendChild(newLabel);
    newBody.appendChild(newLink);
    // var newP = doc.createElement("p");
    // var Ptext = doc.createTextNode("De eerste paragraaf");
    // newP.appendChild(Ptext);
    // newBody.appendChild(newP);
    newhtml.appendChild(newBody);
    doc.appendChild(newhtml);
    
    console.dir(doc.documentElement.innerHTML);
}
function runOef9(){
    runOef8();
    var newP = doc.createElement("p");
    var Ptext = doc.createTextNode("De eerste paragraaf");
    newP.appendChild(Ptext);
    doc.getElementsByTagName("body")[0].appendChild(newP);
    console.dir(doc.documentElement.innerHTML);
}