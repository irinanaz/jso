'use strict';
function Note(idDiv,titel, bodyTXT) {
	this.idDiv = idDiv;
	this.titel = titel;
	this.bodyTXT = bodyTXT;
}
var noteArray = [];
window.onload = function(e) {
    document.getElementById("idNewNote").onclick = newNote;
    document.getElementById("idSave").onclick = saveNotes;
    refreshNotes();
}
function refreshNotes(){
    
    var notes = JSON.parse(localStorage.getItem('notes'));
    if (notes != null){
        for (var i=0; i<notes.length; i++){

            noteArray[i]= new Note (notes[i].idDiv, notes[i].titel,notes[i].bodyTXT);
            fillOldNotes(notes[i].idDiv, noteArray[i].titel, notes[i].bodyTXT);
        }    
    }
}
function doFocus(){
    var noteFocus = document.querySelectorAll("input[type='text']");
    noteFocus[noteFocus.length-1].focus();
}
function saveNotes(){
    
    var notes = new Array();
    for (var i=0; i<noteArray.length; i++){
        let noteInArray = noteArray[i];
        notes[i] = noteInArray;
        localStorage.setItem('notes', JSON.stringify(notes));
    }
}

function fillOldNotes(idDiv,titelEx,bodyTXT){
    

        var newNote = document.createElement("div");
        newNote.className = "note";
        newNote.id = idDiv;
        document.getElementById("idContainer").appendChild(newNote);
        var titel = document.createElement("input");
        titel.type= "text";
        titel.value = titelEx;
        titel.onblur = function( ){
            var newText = this.value;
            var idToAdd = this.parentNode.id;
            var indexToAdd = noteArray.findIndex(n => n.idDiv == idToAdd);
            noteArray[indexToAdd].titel = this.value;
            // console.log(noteArray[indexToAdd]);
           
        };
        newNote.appendChild(titel);
        var btnClose = document.createElement("input");
        btnClose.type= "button";
        btnClose.className = "btnClose";

        btnClose.onclick = closeNote;

        newNote.appendChild(btnClose);
        var txtBody = document.createElement("textarea");
        txtBody.value = bodyTXT;
        txtBody.onblur = function( ){
            var newText = this.value;
            var idToAdd = this.parentNode.id;
            var indexToAdd = noteArray.findIndex(n => n.idDiv == idToAdd);
            noteArray[indexToAdd].bodyTXT = this.value;
            // console.log(noteArray[indexToAdd]);
        };
        
        newNote.appendChild(txtBody); 
        
    }
function newNote(){
    
        var inx = document.getElementById("idContainer").getElementsByTagName("div").length;
         if (inx == 0){
            var newDivID = 0;
         } else {
         var newDivID = parseInt(document.getElementById("idContainer").getElementsByTagName("div")[inx-1].id) + 1;
         }

        
        var newNote = document.createElement("div");
        newNote.className = "note";
        newNote.id = newDivID;
        document.getElementById("idContainer").appendChild(newNote);
        var titel = document.createElement("input");
        titel.type= "text";
        titel.value = "Your title";
        titel.onblur = function( ){
            var newText = this.value;
            var idToAdd = this.parentNode.id;
            var indexToAdd = noteArray.findIndex(n => n.idDiv == idToAdd);
            noteArray[indexToAdd].titel = this.value;
            // console.log(noteArray[indexToAdd]);
        };
        newNote.appendChild(titel);
        var btnClose = document.createElement("input");
        btnClose.type= "button";
        btnClose.className = "btnClose";

        btnClose.onclick = closeNote;

        newNote.appendChild(btnClose);
        var txtBody = document.createElement("textarea");
        txtBody.value = "Your text";
        txtBody.onblur = function( ){
            var newText = this.value;
            var idToAdd = this.parentNode.id;
            var indexToAdd = noteArray.findIndex(n => n.idDiv == idToAdd);
            noteArray[indexToAdd].bodyTXT = this.value;
        };
        
        newNote.appendChild(txtBody); 
        
        var noteInArray = new Note(newDivID,titel.value,txtBody.value);
        
        console.log(noteInArray);
        noteArray.push(noteInArray);
       

    }

 function closeNote(e){
    var btnClose = this;
    // of
    //var btnClose = e.target;
    var divToDelete = btnClose.parentNode;
    // remove on screen:
    divToDelete.parentNode.removeChild(divToDelete); 
    //console.log(divToDelete.id);
    // remove from array:
    var indexToDelete = noteArray.findIndex(n => n.idDiv == divToDelete.id);
    console.log(indexToDelete);
    noteArray.splice(indexToDelete,1);
    console.log(noteArray);
    //
    // toonArray();
     doFocus();
 }



