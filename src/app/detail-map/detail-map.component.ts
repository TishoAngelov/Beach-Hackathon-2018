import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wis-detail-map',
  templateUrl: './detail-map.component.html',
  styleUrls: ['./detail-map.component.scss']
})
export class DetailMapComponent implements OnInit {
  lat: number = 42.2863377;
  lng: number = 27.754287899999998;

  @Input() markers = [
    {
      locationName: 'Централен плаж Бургас',
      lat: 42.2863377,
      long: 27.754287899999998,
      flagType: 'GREEN',
      timestamp: 1537006006219,
    },
    {
      locationName: 'Централен плаж Друг',
      lat: 43.2863377,
      long: 27.754287899999998,
      flagType: 'RED',
      timestamp: 1537006006219,
    }
  ]

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position=> {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    })
  }

  
}
