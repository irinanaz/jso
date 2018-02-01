
class Lintje{
    constructor(private kleur: string, private _lengte:number) {
        
    }
    
    get lengte() {
        return this._lengte;
    }

    aantalStukken(lengte:number){
        if (lengte>0){
            return Math.floor( this._lengte/lengte);}
        else console.log('foutmelding');
    }
    verkorten(lengteStuk:number, stukken:number = 1){
        if (lengteStuk <= this._lengte){
            this._lengte -= lengteStuk;}
        else console.log('te kort melding');
    }
   
}
let lint1 = new Lintje("wit",50);
console.log(lint1);



// lint1.lengte = 5; 

console.log('min 1 stuk van 1m:  '+ lint1.verkorten(1));
console.log('min 3 stukken van 1m:  ' + lint1.verkorten(1,3));

