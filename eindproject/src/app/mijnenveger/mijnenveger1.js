        
 /***************************************************************************/   
 /* MIJNENVEGER                                                             */
/************************************************************************** */


// CURRENT USER -----------------------------------------------------------
// let logedInUser = JSON.parse(localStorage.getItem('currentUser'));
// .id
// .username
// .firstName
// .lastName
// .token: "fake-jwt-token
//      let usernameS=JSON.parse(localStorage.getItem('currentUser')).username;//test usernameS
//      console.dir(usernameS + ' is ingelogd');
//      usernameS={};
// end CURRENT USER -------------------------------------------------------

        // *** speelveld ***
        var x=8;//aantal kolommen
        var y=8;//aantal rijen
        var b=10;//aantal bommen
        var bom=new Array(0);//plaats van bom
        var gb=new Array(0);//plaats gecheckt zonder bom
        var p=new Array(x*y);for(var i=0;i<p.length;i++){p[i]=0;};//array posities
        var dr=new Array(0);//array data records
        var sec=0,min=0;//tijd
        var tijd=0;//interval
        var totaal=0;
        var stop=false;//pauze
        var m=6,step=4;//instellingen slider grid (m=min)
        
        function reset(){
        $('#bommen').html('');
        ci();//clear alle intervals
        x=8;y=8;
        sec=0;min=0;
        totaal=0;
        m=6,step=4;
        gb=new Array(0);
        bom=new Array(0);
        p=new Array(x*y);for(var i=0;i<p.length;i++){p[i]=0;};
        dr=new Array(0);
        frame(x,y);
        eigenrecords();
        }

        function ci(){
            
            for(var i=0;i<2000;i++){clearInterval(i);}
            console.log(tijd);}

        function invoer(){
            
            b=$('#b').val()*1;x=$('#x').val()*1;y=$('#y').val()*1;
            p=new Array(x*y);for(var i=0;i<p.length;i++){p[i]=0;};
            bommen(b);
            $('#field').html("<div id='mvWrapper'><h1 id='titel'>MijnenVeger</h1><div id='klok'>00:00</div><div id='speelveld' style='width:"+(x*32)+"px;height:"+(y*32)+"px;'></div><div id='pauze' onclick='pauze()'>pauze</div><div id='reset' onclick='reset()'>reset</div></div>");
            var html="<div id='bericht' class='none'><p id='tekst'></p></div>";
            for(var j=0;j<y;j++){
                for(var i=0;i<x;i++){
                    html+="<div class='blokje' id='"+((j==0?0:j*x)+i)+"' onclick='klikLinks(event,"+((j==0?0:j*x)+i)+")' oncontextmenu='klikRechts(event,"+((j==0?0:j*x)+i)+")' style='left:"+(i*32)+"px;top:"+(j*32)+"px;'></div>"
                }
            }
            $('#speelveld').html(html);
            $('#invoer').addClass('none');
        }

        function frame(x,y){
            
            $('#field').html("<div id='mvWrapper'><h1 id='titel'>MijnenVeger</h1><div id='klok'>00:00</div><div id='speelveld' style='width:"+(x*32)+"px;height:"+(y*32)+"px;'></div><div id='pauze' onclick='pauze()'>pauze</div><div id='reset' onclick='reset()'>reset</div></div>");
            var html="<div id='invoer' class='pauze'>";
            html+="<p>breedte: <b id='xx'>8</b></p><input id='x' type='range' onchange='slider()' min='4' max='18' step='2' value='8'>";
            html+="<p>hoogte: <b id='yy'>8</b></p><input id='y' type='range' onchange='slider()' min='4' max='18' step='2' value='8'><br>";
            html+="<p>bommen: <b id='bb'>10</b></p><input id='b' type='range' onchange='slider()' min='6' max='18' step='4' value='10'><br>";
            html+="<button id='start' onclick='invoer()'>start de game</button>";
            html+="</div>";
            $('#speelveld').html(html);
        }
        function slider(){
            
            x=$('#x').val();y=$('#y').val();
            $('#xx').text(x);
            $('#yy').text(y);
            m=Math.floor(Math.sqrt(x*y)-2);step=Math.floor((x*y)/16);
            $('#b').attr('min', m).attr('max', m+(3*step)).attr('step',step);
            $('#bb').text($('#b').val());
            b=$('#b').val()*1;x=$('#x').val()*1;y=$('#y').val()*1;
            records();
        }

        function klikLinks(event,xy){
            
            if(sec==0 && min==0){tijd=setInterval(klok,1000);}
            if($.inArray(xy, bom) !== -1){
                $('#'+xy).removeClass().addClass('leeg explo');
                showBom();$('#tekst').text('VERLOREN!').css('margin-left',(-95+(x*16))+'px');
                $('#bommen').html("<p>Helaas!</p>");
            }
            else{
                checkmark();
                geenBom(xy)}
        }

        function klikRechts(event,xy){
            
            event.preventDefault();
            if(sec==0 && min==0){tijd=setInterval(klok,1000);alert(tijd);}
            if($('#'+xy).hasClass('blokje')){
            $('#'+xy).removeClass('r'+p[xy]).addClass('r'+(p[xy]>2?p[xy]=0:p[xy]+=1)).html(p[xy]==1?'<i class="fas fa-flag r1"></i>':p[xy]==2?'<i class="fas fa-question"></i>':"");
            checkmark();
            }

        }
        function checkmark(){
            let aantal=(b-$('.r1').length)+2;$('#bommen').html(aantal==0?'<p>Mischien zijn nu alle bommen gemarkeert!</p>':aantal<0?'<p>Er zijn nu meer markeringen dan er bommen kunnen zijn!</p>':'<p>Er zijn misschien nog '+aantal+' bommen te markeren.</p>');
        }

        function geenBom(xy){
            
            $('#'+xy).removeClass().addClass("leeg o");totaal++;
            var a=0;var aa=0;
            for(var j=-1*x;j<2*x;j+=x){
                for(var i=xy%x==0?0:-1;i<((xy+1)%x==0?1:2);i++){var z=(xy+j)+i;
                    if(z>=0 && z<x*y){
                        if($.inArray(z, bom) !== -1){a++}
                        else if(!$('#'+z).hasClass('o') && $.inArray(z, gb) == -1){gb.push(z);aa++}
                    }
                } 
            }
            $('#'+xy).text(""+a==0?"":a).css("color", "rgb("+(0+(60*(a==0?1:a>4?4.2:a)))+","+(255-(60*(a==0?1:a>4?4.2:a)))+",0)");
            if(a>0){for(var i=0;i<aa;i++){gb.pop();}};
            if(gb.length>0){let next=gb[0];gb.splice(0,1);geenBom(next);}
            checkmark();
            if(totaal==(x*y)-b){$.when( showBom() ).done(function() {$('#tekst').text('GEWONNEN!').css('margin-left',(-95+(x*16))+'px');
            $('#bommen').html('<p>Het is je gelukt om alle bommen op te sporen!</p>');
            gewonnen();});}
            
        }

        function bommen(b){
            
            while(bom.length<b){
                var x=Math.floor(Math.random()*p.length);
                if($.inArray(x, bom) == -1){bom.push(x)};
            };alert(bom);
        }

        function showBom(){
            
            ci();
            for(bb in bom){$('#'+bom[bb]).addClass("r3").html('<i class="fas fa-bomb"></i>');}
            $('#bericht').removeClass().addClass('win');
        }

        function klok(){
            
            sec++;if(sec>59){sec=0;min++;}
            $('#klok').text((min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec));
        }

        function pauze(){
            
            if(!$('#bericht').hasClass('win')){
                if(!stop){$('#pauze').text('continue');stop=true;ci();
                $('#bericht').removeClass().addClass('pauze');$('#tekst').text('PAUZE').css('margin-left',(-50+(x*16))+'px');}
                else{$('#pauze').text('pauze');stop=false;tijd=setInterval(klok,1000);
                $('#bericht').removeClass().addClass('none');}
            }
        }

        function gewonnen(){
            let usernameS = JSON.parse(localStorage.getItem('currentUser')).username;
            var id=((b-m==0?0:(b-m)/step)<<6)+(((x/2)-2)<<3)+((y/2)-2)+1;
            $.post( "http://localhost:1337/zetScore", { name: usernameS, id: id, score: (min*100)+sec }, function(data){
                alert(data);
                $.when( eigenrecords() ).done(function() {records();
                    usernameS = {};
                  });    
            } );
            
        }
        function eigenrecords(){
            
            let usernameS = JSON.parse(localStorage.getItem('currentUser')).username;
            console.log('eigenrecords fie');
            $.get( "http://localhost:1337/haalEigenRecords", { name: usernameS }, function(data){if(data.length>0){
                var html="";var tel=0;dr=[];
                $.each( data, function(k,v){
                var br=Math.floor((v.id-1)/64);
                var xr=(Math.floor(((v.id-1)%64)/8)*2)+4;
                var yr=Math.floor(((v.id-1)%8)*2)+4;
                var bt=(Math.floor((xr*yr)/16)*br)+Math.floor(Math.sqrt(xr*yr)-2);
                html+="<tr class='bgc"+br+"'><td>"+xr+"x"+yr+"</td><td>"+bt+"</td><td>"+(v.speler1!=usernameS?'--':maaktijd(v.score1))+"</td><td>"+(v.speler2!=usernameS?'--':maaktijd(v.score2))+"</td><td>"+(v.speler3!=usernameS?'--':maaktijd(v.score3))+"</td></tr>";
                tel++;if(tel==8){dr.push(html);tel=0;html="";}
                });
                if(tel>0){dr.push(html)}; 
                maaklijst(0);
                
                }else{$('#eigenscore').html('<h3>Nog geen eigen records!</h3>');}},"json");
            
        }
        function records(){
            var id=((b-m==0?0:(b-m)/step)<<6)+(((x/2)-2)<<3)+((y/2)-2)+1;
            $.get( "http://localhost:1337/haalRecords", { id: id }, function(data){if(data.length>0){
            $('#score').html('<table><thead><tr><td colspan="3"><h3>Scores bij '+x+'x'+y+' grid en '+b+' bommen</h3></td></tr><tr><td>Nr</td><td>naam</td><td>tijd</td></tr></thead>'+
                '<tbody class="bgc0"><tr><td>1</td><td>'+data[0].speler1+'</td><td>'+maaktijd(data[0].score1)+'</td></tr><tr><td>2</td><td>'+data[0].speler2+'</td><td>'+maaktijd(data[0].score2)+'</td></tr><tr><td>3</td><td>'+data[0].speler3+'</td><td>'+maaktijd(data[0].score3)+'</td></tr></tbody></table>');    
            }else{$('#score').html('<h3>Nog geen record data van deze grid!</h3>');}},"json");
        }
        function maaktijd(st){
            return ((st-st%100)/100==0?"00":(st-st%100)/100<10?"0"+(st-st%100)/100:(st-st%100)/100)+":"+(st%100<10?"0"+st%100:st%100);
        }
        function maaklijst(deel){
            $('#eigenscore').html("<table><thead><tr><td colspan='5'><h3>Uw behaalde scores: <b onclick='maaklijst("+(deel==0?dr.length-1:deel-1)+")'>< </b>blad "+(deel+1)+"<b onclick='maaklijst("+(deel==dr.length-1?0:deel+1)+")'> ></b></h3></td></tr><tr><td>grid</td><td>bommen</td><td>1</td><td>2</td><td>3</td></tr></thead><tbody>"+dr[deel]+"</tbody></table>");
        }
function initMG(){
    $(function (){
        // alert('function fie');
        frame(x,y);
        eigenrecords();
        records();
        $(".slide").click(function(){ $('#infotext').slideToggle();});
        

    });
}