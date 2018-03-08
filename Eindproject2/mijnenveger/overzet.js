function checkmark(){let aantal=(b-$('.r1').length)+2;$('#bommen').html(aantal==0?'<p>Mischien zijn nu alle bommen gemarkeert!</p>':aantal<0?'<p>Er zijn nu meer markeringen dan er bommen kunnen zijn!</p>':'<p>Er zijn misschien nog '+aantal+' bommen te markeren.</p>');}

checkmark();// begin else in Kliklinks en onderste if achteraan Klikrechts

<div id="bommen"></div>//boven field in html

<h3>Spelinformatie</h3>//in div van de spelinformatie
<p><b>Doel van het spel:</b> probeer in een zo kort mogelijke tijd alle verborgen mijnen op te sporen.</p>
<p><b>spelregels:</b> Klik met je rechtermuisknop om een vakje te markeren met een <b class="r1">v</b> als waarschijnlijk een bom</p>
<p>Na een tweede klik markeer je met een <b class="r2">?</b> als je het niet zeker weet.</p>
<p>Na een derde klik verwijder je de markering.</p>
<p>Klik met je linkermuisknop om een vakje te openen, een eventueel cijfer geeft aan hoeveel aangrenzende vakjes een bom bevat.</p>
<p>Speel je alle vakjes om de bommen leeg heb je <b class="r1">gewonnen</b> druk je op een bom dan heb je <b class="r2">verloren</b>.</p>

$('#bommen').html("<p>Helaas!</p>");//achter VERLOREN

$('#bommen').html('<p>Het is je gelukt om alle bommen op te sporen!</p>');//achter GEWONNEN

$('#bommen').html('');//eerste regel in Reset

#bommen p{margin:4px 0 0 0;}//in css