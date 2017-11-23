'use strict';

var mijnAuto;


// object literal 
mijnAuto = {
    merk: "Fjord", // eigenschap/propertie kan van elke type zijn ook een array.
    model: "Fiesta", // waarden van alle properties moet al bekend zijn op die moment
    bouwjaar: 1960,  // dus als je al bv. x en y kent dan x+y kan ook als waarde van propertie staan.
    cabrio: true,    // dat woordt dan inline berekend.
    gestart: false,
    rijden: function (){        // body van methode - W gedefineerd als anonyme functie.
                                    // krijgt de naam --> rijden

        //  Javascript zoekt eerst naar een lokale var met naam gestart
        // als die er iet is, zoekt javascript een parameter met naam gestart
        // als die er niet , zoekt javascript een globale var met naam gestart
        
        // mijnAuto.gestart werkt ook niet want
        //  mijnAuto kan niet uniek zijn voor meerdere objecten.
        // dus this.propertie binnen een object
        if (this.gestart==true){  //gestart of mijnAuto.gestart geeft een fout
            console.log("vroemvroem");
        }    
    },
    starten: function(){
        this.gestart= true;
        console.log("ik ben opgestart...");
    },
    gegevens:function (){
        var cabrio = this.cabrio ? "Cabrio " : "";
        // console.log ("Mijn auto: %s, %s, %s%s",this.merk,this.model,this.bouwjaar,cabrio);
        return "Mijn auto: "+cabrio + this.merk+ ", "+this.model+", uit "+this.bouwjaar+".";
    }
};  

var bouwjaarVanMijnAuto = mijnAuto.bouwjaar;
console.log(bouwjaarVanMijnAuto);
//mijnAuto.cabrio = false;
console.log (mijnAuto);
bouwjaarVanMijnAuto --;
console.log(bouwjaarVanMijnAuto);
mijnAuto.bouwjaar = bouwjaarVanMijnAuto;
// bijkomende eigenschap toe voegen later:
mijnAuto.kleur = "knalrood";
console.log (mijnAuto);

// object heeft eigenschappen en ook functies, die noemen we methode.
// dus eigenschappen en methodes --> zie boven rijden: function...
// functie oproepen:
mijnAuto.rijden();
mijnAuto.starten();
mijnAuto.rijden();

var tmp =  mijnAuto.gegevens();
console.log (tmp);