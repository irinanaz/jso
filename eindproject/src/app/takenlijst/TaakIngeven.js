        
 /***************************************************************************/   
 /* TAKENLIJST                                                             */
/************************************************************************** */


// let catLijst = [];
// catLijst.push($('#catTitel').val());
// console.log (catLijst);

// CURRENT USER -----------------------------------------------------------
// let logedInUser = JSON.parse(localStorage.getItem('currentUser'));
// .id
// .username
// .firstName
// .lastName
// .token: "fake-jwt-token
// CURRENT USER end -------------------------------------------------------

//versie 2 ---------------------------------------------------------
function optionsVullen() {
	$.ajax({
		url: 'http://localhost:1337/categorienamen',
		type: 'GET',
		data: $('#addCat').serialize(),
		success: function (data) {
			let logedInUser=JSON.parse(localStorage.getItem("currentUser"));
			$("#catLijst1").empty();
			$("#catLijst1").append("<option>Hoofdcategorie</option>");
			for (var i = 0; i < data.result.length; i++) {
				if (data.result[i].ID == logedInUser.id) { 			// ID van IRINA ipv 1 OK
					$("#catLijst1").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
				};
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				if (data.result[i].ID == logedInUser.id) { 			// ID van IRINA ipv 1 OK
					$("#catLijst2").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
				};
			}
			logedInUser={};
		}
	});
}

function categorieAanmaken() {
	let logedInUser=JSON.parse(localStorage.getItem("currentUser"));
	$.ajax({
		url: 'http://localhost:1337/'+ $('#addCat').attr('action')+"/"+logedInUser.id,
		type: 'POST',
		data: $('#addCat').serialize(),
		success: function (data) {
			$('#opslCat').addClass('zichtbaar');
			setTimeout(function () {
				$('#opslCat').removeClass('zichtbaar');
			}, 2500);

			$("#catLijst1").empty();
			$("#catLijst1").append("<option>Hoofdcategorie</option>");
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst1").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst2").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
			}

		}
	});
}

function taakAanmaken() {
	$.ajax({
		url: 'http://localhost:1337/'+ $('#addTaak').attr('action'),
		type: 'POST',
		data: $('#addTaak').serialize(),
		success: function (data) {
			$('#opslTaak').addClass('zichtbaar');
			setTimeout(function () {
				$('#opslTaak').removeClass('zichtbaar');
			}, 2500);
		}
	});
}

function lijstVullen() {

	$.ajax('http://localhost:1337/catWeergeven', {
		methode: 'GET',
		dataType: 'json',
		success: function (data) {
			$("#takenLijst").empty();
			let logedInUser=JSON.parse(localStorage.getItem("currentUser"));
			var hoofdcats = data.result.filter(cat => cat.PARENTCATIDC == undefined && cat.ID == logedInUser.id);	// ID van IRINA ipv 1 OK
			var unic_hoofdcats = [];
			for (var i = 0; i < hoofdcats.length; i++) {
				if (!unic_hoofdcats.find(cat => cat.CATID == hoofdcats[i].CATID)) { unic_hoofdcats.push(hoofdcats[i]); }
			}
			hoofdcats = unic_hoofdcats;
			for (var i = 0; i < hoofdcats.length; i++) {
				$("#takenLijst").append("<div id=C" + hoofdcats[i].CATID + " >" + hoofdcats[i].CATNAME + "</div>");
				verwerksubcat(hoofdcats[i].CATID, data.result);
			}
			logedInUser={};
			verwerkTaken(data.result);
		}
	});
}

function verwerksubcat(parentid, data) {
	let logedInUser=JSON.parse(localStorage.getItem("currentUser"));
	var subcats = data.filter(cat => cat.PARENTCATIDC == parentid && cat.ID == logedInUser.id);		// ID van IRINA ipv 1 OK
	var unic_subcats = [];
	for (var i = 0; i < subcats.length; i++) {
		if (!unic_subcats.find(cat => cat.CATID == subcats[i].CATID)) { unic_subcats.push(subcats[i]); }
	}
	subcats = unic_subcats;
	for (var i = 0; i < subcats.length; i++) {
		$("#C" + subcats[i].PARENTCATIDC).append("<div id=C" + subcats[i].CATID + " >" + subcats[i].CATNAME + "</div>");
		verwerksubcat(subcats[i].CATID, data);
	}
	logedInUser={};
}

function verwerkTaken(result) {
	let logedInUser=JSON.parse(localStorage.getItem("currentUser"));
	var taken = result.filter(t => t.PARENTCATIDT != undefined && t.ID == logedInUser.id);			// ID van IRINA ipv 1 OK
	for (var i = 0; i < taken.length; i++) {
		$("#C" + taken[i].CATID).append("<div id=T" + taken[i].TAAKID + ">" + taken[i].TITEL + "<p>" + taken[i].TAAKOMSCHR + "</p>" + "</div>");
	}
	logedInUser={};
}
/*---------------------------------*/
function initTL(){
	// alert('Yeop');
	optionsVullen();
	lijstVullen();
}
function initCat() {
	categorieAanmaken();
}
function initTaak() {
	taakAanmaken();
}

// versie 2 - end  ---------------------------------------


// werkende versie 1 -------------------------------------
/*
function optionsVullen() {

	$.ajax({
		url: 'http://localhost:1337/categorienamen',
		type: 'GET',
		data: $('#addCat').serialize(),
		success: function (data) {
			
			$("#catLijst1").empty();
			$("#catLijst1").append("<option>Hoofdcategorie</option>");
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst1").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst2").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
			}
		}
	});
}

function categorieAanmaken() {
	let logedInUser = JSON.parse(localStorage.getItem('currentUser'));
	$.ajax({
		url: 'http://localhost:1337/'+ $('#addCat').attr('action'),
		type: 'POST',
		data: $('#addCat').serialize(),
		success: function (data) {
			console.log('aanmaken ');
			
			console.log(logedInUser.id);
			$('#opslCat').addClass('zichtbaar');
			setTimeout(function () {
				$('#opslCat').removeClass('zichtbaar');
			}, 2500);

			$("#catLijst1").empty();
			$("#catLijst1").append("<option>Hoofdcategorie</option>");
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst1").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				$("#catLijst2").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
			}
			logedInUser={};
		}
	});
}

function taakAanmaken() {
	$.ajax({
		url: 'http://localhost:1337/'+$('#addTaak').attr('action'),
		type: 'POST',
		data: $('#addTaak').serialize(),
		success: function (data) {
			$('#opslTaak').addClass('zichtbaar');
			setTimeout(function () {
				$('#opslTaak').removeClass('zichtbaar');
			}, 2500);
		}
	});
}

function lijstVullen() {

	$.ajax('http://localhost:1337/catWeergeven', {
		methode: 'GET',
		dataType: 'json',
		success: function (data) {
			$("#takenLijst").empty();
			var hoofdcats = data.result.filter(cat => cat.PARENTCATIDC == undefined);
			var unic_hoofdcats = [];
			for (var i = 0; i < hoofdcats.length; i++) {
				if (!unic_hoofdcats.find(cat => cat.CATID == hoofdcats[i].CATID)) { unic_hoofdcats.push(hoofdcats[i]); }
			}
			hoofdcats = unic_hoofdcats;
			for (var i = 0; i < hoofdcats.length; i++) {
				$("#takenLijst").append("<div id=C" + hoofdcats[i].CATID + " >" + hoofdcats[i].CATNAME + "</div>");
				verwerksubcat(hoofdcats[i].CATID, data.result);
			}
			verwerkTaken(data.result);
		}
	});
}

function verwerksubcat(parentid, data) {
	var subcats = data.filter(cat => cat.PARENTCATIDC == parentid);
	var unic_subcats = [];
	for (var i = 0; i < subcats.length; i++) {
		if (!unic_subcats.find(cat => cat.CATID == subcats[i].CATID)) { unic_subcats.push(subcats[i]); }
	}
	subcats = unic_subcats;
	for (var i = 0; i < subcats.length; i++) {
		$("#C" + subcats[i].PARENTCATIDC).append("<div id=C" + subcats[i].CATID + " >" + subcats[i].CATNAME + "</div>");
		verwerksubcat(subcats[i].CATID, data);
	}
}

function verwerkTaken(result) {
	var taken = result.filter(t => t.PARENTCATIDT != undefined);
	for (var i = 0; i < taken.length; i++) {
		$("#C" + taken[i].CATID).append("<div>" + taken[i].TITEL + "<p>" + taken[i].TAAKOMSCHR + "</p>" + "</div>");
	}
} */

// werkende versie 1 - end



// function init() {
	
// 	optionsVullen();
// 	lijstVullen();
// 	var btn = document.getElementById("catMaken");
// 	categorieAanmaken();
// 	var btn = document.getElementById("taakMaken");
// 	taakAanmaken();
// }