import { Component } from '@angular/core';

const MAX_LENGTE = 100;

@Component({
  selector: 'oefnotitie',
  templateUrl: './oefnotitie.component.html',
  styleUrls: ['./oefnotitie.component.css']
})
export class OefNotitieComponent {
  title = 'Oefening: notitie';
  message = '';
  left(): number {
    return MAX_LENGTE - this.message.length;
  };
  save(): void{
    alert('bewaren - in opbouw');
  }
  clear(): void{
    this.message = '';
  }
  isMessageEmpty(): boolean {
    return this.message.length == 0; 
  };
}
