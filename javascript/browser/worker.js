//
// pingpong worker
//

// als message naar deze worker gestuurd wordt, begint worker met uitvoering van pingpong
onmessage = pingpong; //pingpong is de naam van de functie die moet uitgevoerd w onmessage
// of anonieme functie.

function pingpong(event) {
	console.log("Worker received the following message: " + event.data);
	if (event.data == "ping") {  // naam van de parameter kunnen we kiezen, 
		postMessage("pong");  //maar methodes van parameter zijn vast gelegd: .data, postmessage
	}
	else {
		// intentionally make an error!
		1/x;
	}
}

