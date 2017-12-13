
var request = new XMLHttpRequest();

window.onload = fie;

function fie() {
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var sales = JSON.parse(request.responseText);
            showSales(sales);
            //console.dir(sales);
        }
    };
    request.open("GET", "sales.json", true);
    request.send();
}


function showSales(str) {
    //document.getElementById("sales").innerHTML = str;
    for(var i=0; i<str.length; i++){
    var div = document.createElement("div");
    div.className = "saleItem";
    div.innerHTML = str[i].name + " sold " +str[i].sales +" gumballs.";
    document.getElementById("sales").appendChild(div);
	}
}