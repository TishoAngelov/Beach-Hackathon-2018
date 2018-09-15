import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wis-detail-map',
  templateUrl: './detail-map.component.html',
  styleUrls: ['./detail-map.component.scss']
})
export class DetailMapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  ngOnInit() {
  }

  
}
