import { Component, Input } from '@angular/core';

@Component({
  selector: 'wis-marker-info',
  templateUrl: './marker-info.component.html',
  styleUrls: ['./marker-info.component.scss']
})
export class MarkerInfoComponent  {
  @Input() marker;
  
}
