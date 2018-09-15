import { Component, Input } from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'wis-marker-info',
  templateUrl: './marker-info.component.html',
  styleUrls: ['./marker-info.component.scss']
})
export class MarkerInfoComponent  {
  @Input() marker;
  constructor(public domSanitizer: DomSanitizer) {
  }
}
