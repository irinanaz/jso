import { DomSanitizer } from "@angular/platform-browser";
import { SafeUrl } from "@angular/platform-browser/src/security/dom_sanitization_service";
import { OpmaakComponent } from "../opmaak/opmaak.component";
import { Url } from "url";


export class Opmaakbg {
    sanitizer: DomSanitizer;
    
    constructor(public sfeername: string, public filename: string, public filelink:string){
        // this.sfeername = sfeername;
        // this.filename= filename;
    }
    
    get maakKlasse(): string{
        return "card-bg " + this.sfeername;
      }
    // get getLink(): SafeUrl{
    //     return this.sanitizer.bypassSecurityTrustUrl("./opmaakimages/" + this.filename);
    //   }
      
}
export class OpmaakFnt {
    constructor(public fntname: string ='', public fntlink: string =''){
    }
    
    // get maakKlasse(): string{
    //     return "card-bg " + this.sfeername;
    //   }
   
      
}


export const bgKAART = new Array <Opmaakbg> ( 
    new Opmaakbg( 'Sfeer1','bg-k1.jpg','http://localhost:4200/bg-k1.0ae403290c5930a158a4.jpg'),
    new Opmaakbg( 'Sfeer2', 'bg-k2.jpg','http://localhost:4200/bg-k2.73c2509267d777d15121.jpg'),
    new Opmaakbg( 'Sfeer3',  'bg-k3.jpg','http://localhost:4200/bg-k3.3a08f7a40d2d3de5706b.jpg'),
    new Opmaakbg( 'Sfeer4', 'bg-k4.jpg','http://localhost:4200/bg-k4.5b6d0effdadbe7e6429d.jpg'),
    new Opmaakbg( 'Sfeer5',  'bg-k5.jpg','http://localhost:4200/bg-k5.29c9349b02c7b50a55cf.jpg'));

export const fontKAART = new Array <OpmaakFnt> ( 
    new OpmaakFnt( 'Times New Roman','"Times New Roman", Times, serif'),
    new OpmaakFnt( 'Arial/Helvetica', 'Helvetica, sans-serif'),
    new OpmaakFnt( 'Palantino',  '"Palatino Linotype", "Book Antiqua", Palatino, serif'),
    // new OpmaakFnt( 'Sfeer4', 'bg-k4.jpg'),
    // new OpmaakFnt( 'Sfeer5',  'bg-k5.jpg')
);

      