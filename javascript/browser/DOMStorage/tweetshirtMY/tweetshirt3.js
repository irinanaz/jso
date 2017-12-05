'use strict';
var COLORBG;
var SHAPE;
var COLORSHAPE;
var COLORTXT;
var FONTSIZE;
var TWEET;
var X;
var Y;
var SH;
var POSITIONSX = new Array();
var POSITIONSY = new Array();
window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
	document.getElementById("shape").onchange=showPallete;
	// Easter Egg ;-)
	makeImage();
	document.getElementById("idSave").onclick = savePreview;
	document.getElementById("idReload").onclick = reloadPreview;
}
function reloadPreview(){
	var preview = JSON.parse(localStorage.getItem('preview'));
	if (preview != null){
		document.getElementById("backgroundColor").value = preview.colorBG;
		var shapeIndx = getIndex(document.getElementById("shape"), preview.shape); // document.getElementById("shape").indexOf(preview.shape);
		document.getElementById("shape")[shapeIndx].selected=true;
		document.getElementById("backgroundColorShape").value = preview.colorShape;
		document.getElementById("foregroundColor").value = preview.colorText;
		document.getElementById("foregroundText").value = preview.sizeFont;
		var tweetIndx = getIndex(document.getElementById("tweets"),preview.tweet);
		document.getElementById("tweets")[tweetIndx].selected = true;
	}
	previewHandler();
}
function getIndex(select, value){
	var inx=0;
	for (var i=0; i<select.length; i++){
		if(select[i].value == value){
			inx = i;
		}
	}
	return inx;
}
function savePreview(){
	var preview = JSON.parse(localStorage.getItem('preview'));
	var positions ;
	
		if (preview == null){
			preview = new Array();
			positions = new Array();
			
		}
		
		preview = {colorBG: COLORBG, shape:SHAPE, colorShape: COLORSHAPE, colorText: COLORTXT, sizeFont:FONTSIZE,tweet:TWEET};
		localStorage.setItem('preview', JSON.stringify(preview));
		for (var i=0; i < 20; i++) {
			positions[i]={ x:X,y:Y,sh:SH };
			localStorage.setItem('positions', JSON.stringify(positions));
			
		} )
	
}
function showPallete(){
	if (document.getElementById("shape").value != "none"){
		document.getElementById("backgroundColorShape").style.visibility='visible';
	} else{
		document.getElementById("backgroundColorShape").style.visibility = 'hidden';
		document.getElementById("backgroundColorShape").value="";
	}
}

function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");
	// there's no 3D canvas yet; this is to make code futureproof

	fillBackgroundColor(canvas, context);

	//var selectObj = document.getElementById("shape");
	var index = document.getElementById("shape").selectedIndex;
	//var shape = selectObj[index].value;
	SHAPE = document.getElementById("shape")[index].value;
	var positions = new Array();
	for (var i = 0; i < 20; i++) {
		drawShape(canvas, context);
		positions[i]={ x:X,y:Y,sh:SH };
		localStorage.setItem('positions', JSON.stringify(positions));
		
	}
	
	drawText(canvas, context);
	drawBird(canvas, context);
}

// This is where we'll set the background color
function fillBackgroundColor(canvas, context) {
	
	//var bgColor = document.getElementById("backgroundColor").value;
	COLORBG = document.getElementById("backgroundColor").value;
	context.fillStyle = COLORBG;
	context.fillRect(0, 0, canvas.width, canvas.height);

}
//Draw shape
function drawShape(canvas, context){
	var sh = Math.floor(Math.random() * 40);    
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	X = x;
	Y = y;
	SH = sh;
	COLORSHAPE = document.getElementById("backgroundColorShape").value;
	context.fillStyle = COLORSHAPE;

	if (SHAPE == "squares") {
		 drawSquare(canvas, context,sh,x,y);
	}
	else if (SHAPE == "circles") {
		drawCircle(canvas, context,sh,x,y);
	}
}

// Draws a square at a random location
function drawSquare(canvas, context,sh,x,y) {
 
	context.fillRect(x, y, sh, sh);
}

// Draws a circle at a random location
function drawCircle(canvas, context,sh,x,y) {

	context.beginPath();
	context.arc(x, y, sh, 0, degreesToRadians(360), true);
	context.fill();
}

// draws all the text, including the tweet
function drawText(canvas, context) {
	//var selectObj = document.getElementById("foregroundColor");
	var index = document.getElementById("foregroundColor").selectedIndex;
	COLORTXT = document.getElementById("foregroundColor").value;

	context.fillStyle = COLORTXT;
	FONTSIZE = document.getElementById("foregroundText").value;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);


	// draw the tweet!
	//selectObj = document.getElementById("tweets");
	var indx = document.getElementById("tweets").selectedIndex;
	TWEET = document.getElementById("tweets")[indx].value;
	 
	var myFont = "italic "+ FONTSIZE +"em serif";
	context.font = myFont;
	context.textAlign ="center";
	context.textBaseline="middle";
	context.fillText(TWEET, canvas.width/2, canvas.height/2);

	// If you want to try splitIntoLines to 
	// handle longer tweets, uncomment this code
	// and replace the context.fillText line above

	// if (tweet.length > 60) {
	// 	var tweetLines = splitIntoLines(tweet);
	// 	for (var i = 0; i < tweetLines.length; i++) {
			
	// 		context.fillText(tweetLines[i], 30, 70+(i*25));
	// 	}
	// }
	// else {
	// 	context.fillText(tweet, 30, 100);
	// }


	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!", 
		canvas.width-20, canvas.height-40);
}

// draws the twitter bird image
function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "images/twitterBird.png";
	// images don't always load immediatly, so we make sure the image is fully loaded before we draw it:
	twitterBird.onload = function() {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};

}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}


function updateTweets(tweets) {
	var tweetsSelection = document.getElementById("tweets");

	// add all tweets to the tweets menu
	for (var i = 0; i < tweets.length; i++) {
		var tweet = tweets[i];

		// create option
		var option = document.createElement("option");
		option.text = tweet.text;

		// strip any quotes out of the tweet so they don't mess up our option
		option.value = tweet.text.replace("\"", "'");

		// add option to select
		tweetsSelection.options.add(option);
    }
	// make sure the top tweet is selected
	tweetsSelection.selectedIndex = 0;
}


// Splits one long string into multiple lines of 
// no more than 60 characters each. Returns an
// array of the lines.
function splitIntoLines(str) {
	var strs = new Array();
	var space = str.indexOf(' ', 60);
	strs[0] = str.substring(0, space);
	strs[1] = str.substring(space+1);
	if (strs[1].length > 60) {
		space = strs[1].indexOf(' ', 60);
		strs[1] = strs[1].substring(space+1);
		strs[2] = strs[1].substring(0, space);
	}
	return strs;
}

// Easter Egg
function makeImage() {
	var canvas = document.getElementById("tshirtCanvas");
	canvas.onclick = function () {
		window.open(canvas.toDataURL('image/png'), '_blank');
	};
}