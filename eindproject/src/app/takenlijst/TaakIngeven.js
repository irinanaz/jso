        
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
				if (data.result[i].ID == logedInUser.id) { 			// ID van IRINA ipv 1
					$("#catLijst1").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
				};
			}
			$("#catLijst2").empty();
			for (var i = 0; i < data.result.length; i++) {
				if (data.result[i].ID == logedInUser.id) { 			// ID van IRINA ipv 1
					$("#catLijst2").append("<option value='" + data.result[i].CATID + "'>" + data.result[i].CATNAME + "</option>");
				};
			}
			$('#catTitel').val('');
			$('#taakTitel').val('');
			$('#taakOmschr').val('');
			lijstVullen();
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
				optionsVullen();
			}
	});
}

function taakAanmaken() {
  if ($('#taakTitel').val() != '') {	
	$.ajax({
		url: 'http://localhost:1337/'+ $('#addTaak').attr('action'),
		type: 'POST',
		data: $('#addTaak').serialize(),
			success: function (data) {
				$('#opslTaak').addClass('zichtbaar');
				setTimeout(function () {
					$('#opslTaak').removeClass('zichtbaar');
				}, 2500);
				optionsVullen();
		}
	});
  }
}

function lijstVullen() {
    if (($("#catLijst2 option").size()) != 0) { document.getElementById("taakMaken").disabled = false; }
	else { document.getElementById("taakMaken").disabled = true; };
	
	$.ajax('http://localhost:1337/catWeergeven', {
		methode: 'GET',
		dataType: 'json',
		success: function (data) {
			$("#takenLijst").empty();
			let logedInUser=JSON.parse(localStorage.getItem("currentUser"));
			var hoofdcats = data.result.filter(cat => cat.PARENTCATIDC == undefined && cat.ID == logedInUser.id);	// ID van IRINA ipv 1
			var unic_hoofdcats = [];
			for (var i = 0; i < hoofdcats.length; i++) {
				if (!unic_hoofdcats.find(cat => cat.CATID == hoofdcats[i].CATID)) { unic_hoofdcats.push(hoofdcats[i]); }
			}
			hoofdcats = unic_hoofdcats;
			for (var i = 0; i < hoofdcats.length; i++) {
				$("#takenLijst").append("<fieldset class='hc' id=C" + hoofdcats[i].CATID + " ><legend onclick='inuit(" + hoofdcats[i].CATID + ")'><i class='fas fa-book'></i> " + hoofdcats[i].CATNAME + "</i></legend><div class='edit fas fa-pencil-alt' onmouseenter='gain(" + hoofdcats[i].CATID + ")' onmouseleave='gauit(" + hoofdcats[i].CATID + ")'></div></fieldset>");
				verwerksubcat(hoofdcats[i].CATID, data.result);
			}
			verwerkTaken(data.result);
			logedInUser={};
		}
	});
}

function verwerksubcat(parentid, data) {
	let logedInUser=JSON.parse(localStorage.getItem("currentUser"));
	var subcats = data.filter(cat => cat.PARENTCATIDC == parentid && cat.ID == logedInUser.id);	// ID van IRINA ipv 1
	var unic_subcats = [];
	for (var i = 0; i < subcats.length; i++) {
		if (!unic_subcats.find(cat => cat.CATID == subcats[i].CATID)) { unic_subcats.push(subcats[i]); }
	}
	subcats = unic_subcats;
	for (var i = 0; i < subcats.length; i++) {
		$("#C" + subcats[i].PARENTCATIDC).append("<fieldset class='sc' id=C" + subcats[i].CATID + " ><legend onclick='inuit(" + subcats[i].CATID + ")'><i class='fas fa-book'></i> " + subcats[i].CATNAME + "</legend><div class='edit fas fa-pencil-alt' onmouseenter='gain(" + subcats[i].CATID + ")' onmouseleave='gauit(" + subcats[i].CATID + ")'></div></fieldset>");
		verwerksubcat(subcats[i].CATID, data);
	}
	logedInUser={};
}

function verwerkTaken(result) {
	let logedInUser=JSON.parse(localStorage.getItem("currentUser"));
	var taken = result.filter(t => t.PARENTCATIDT != undefined && t.ID == logedInUser.id);	// ID van IRINA ipv 1
	for (var i = 0; i < taken.length; i++) {
		var datumvraag = taken[i].STARTDAT == "" ? "" : "<sub>Start:" + (new Date(taken[i].STARTDAT)).toLocaleDateString("nl-BE") + " - Einde:" + (new Date(taken[i].EINDDAT)).toLocaleDateString("nl-BE") + "</sub>";
		$("#C" + taken[i].CATID).append("<fieldset class='t' id=T" + taken[i].TAAKID + " ><legend><i class='fas fa-clipboard'></i> " + taken[i].TITEL + "</legend><div class='edit fas fa-pencil-alt' onmouseenter='gaint(" + taken[i].TAAKID + ")' onmouseleave='gauitt(" + taken[i].TAAKID + ")'></div>" + datumvraag + "<p>" + taken[i].TAAKOMSCHR + "</p>" + "</fieldset>");
	}
	logedInUser={};
}

/* new --------------------------------------------*/


function inuit(x) { $('#C' + x).children('fieldset').toggle(); }

function gain(c) {
	$('#C' + c + '>.edit').html('<button class="btnSmall" onclick="updCat(' + c + ')">update</button><button class="btnSmall" onclick="delCat(' + c + ')">wissen</button>');
}
function gauit(c) { $('#C' + c + '>.edit').html(''); }
function gaint(t) {
	$('#T' + t + '>.edit').html('<button class="btnSmall" onclick="updTaak(' + t + ')">update</button><button class="btnSmall" onclick="delTaak(' + t + ')">wissen</button>');
}
function gauitt(t) { $('#T' + t + '>.edit').html(''); }

function delCat(c) {
	$.post("http://localhost:1337/delCat", { idC: c }, function (data) { optionsVullen(); });
}
function delTaak(t) {
	$.post("http://localhost:1337/delTaak", { idT: t }, function (data) { optionsVullen(); });
}
function updCat(c) {
	gauit(c);
	$('#C' + c + '>legend').html('<input type="text" value="' + $('#C' + c + '>legend').text().slice(1) + '" autofocus="true"><button onclick="updateCat(' + c + ')">update</button>');
}
function updateCat(c) {
	$.post("http://localhost:1337/updateCat", { idC: c, catname: $('#C' + c + '>legend>input').val() }, function (data) { optionsVullen(); });
}
function updTaak(t) {
	gauitt(t);
	$('#T' + t + '>legend').html('<input type="text" value="' + $('#T' + t + '>legend').text().slice(1) + '" autofocus="true"><button onclick="updateTaak(' + t + ')">update</button><br><label>Start:<input type="date"/></label><label>Einde:<input type="date"/></label><br><textarea rows="4" cols="60">' + $('#T' + t + ' p').text() + '</textarea>');
}
function updateTaak(t) {
	$.post("http://localhost:1337/updateTaak", { idT: t, taakomschr: $('#T' + t + '>legend>textarea').val(), taakname: $('#T' + t + '>legend>input').val(), startdatum: $('#T' + t + '>legend input').eq(1).val(), einddatum: $('#T' + t + '>legend input').eq(2).val() }, function (data) { optionsVullen(); });

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