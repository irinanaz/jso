export class HogerLager {
    public min: number =1;
    public max: number =100;
    public geraden: boolean = false;
    public aantalBeurten : number = 0;
    public teRaden:number;
    constructor() {
        this.teRaden = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min; 
    }

  
    werwerkGok (gok:number): string{
        this.aantalBeurten++;
        // this.geraden = (gok == this.teRaden);
        console.log(this.aantalBeurten);
        if (gok < this.teRaden) {
            return 'groter';
        }
        if (gok = this.teRaden) {
                    this.geraden = true;
                    return 'geraden';
                } else {
                    return 'lager';
                }
    
    }
    reset():void{
        this.geraden = false;
        this.aantalBeurten = 0;
        this.geraden = false;
    };
}
