import { Component, Input, OnInit } from '@angular/core';

import { FlagSevice } from '../services/flags.service';
import { OSM_TILE_LAYER_URL } from '@yaga/leaflet-ng2';
import { Point } from 'leaflet';

@Component({
  selector: 'wis-detail-map',
  templateUrl: './detail-map.component.html',
  styleUrls: ['./detail-map.component.scss']
})
export class DetailMapComponent implements OnInit {
  public lat = 42.2863377;
  public lng = 27.754287899999998;

  public tileLayerUrl: string = OSM_TILE_LAYER_URL;
  public iconUrls = ['assets/images/green-flag.png', 'assets/images/yellow-flag.png', 'assets/images/red-flag.png']
  public iconSize: Point = new Point(30, 30);
  public iconAnchor: Point = new Point(6, 30);
  public popupAnchor: Point = new Point(8, -35);
  public shadowUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAsCAMAAADcpCGDAAAB/lBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyzToXrAAAAqnRSTlMABxAYMyc1HwgBBRlJbIWftKKnUiEKBCBdlL3CxMBzA1CXvG1ZwcOuEiqbqopgS0ZjjkIWJpGzghwGI09kQ4aTRQ4ajWhwmrA4drhVCQ+yNw0CPaQ/mKa5DJCAFasTlrFhg1gucr6HrVZ7vy1RLIxMYiUeIimPd0R5LxtOSLdfixdUuhE2tjlAu1uIXm+glUFqqCuemXWsRzwoaTqlCzBmo6l+nbU+NIFcdEKaR/AAAALgSURBVHicbZT7QxJBEMcXRL0OSUQ8RRZQFBAlX3cqokapmIigB74QLUkzfKamSVqplZVmkT20d9m7/7K7PeVusflpZ/dzM9+dmT0AUk0mT1OkZ2QSZ06dCEYqs1Rns9U5mlxt3v/OqfwCXaEe8mbIMWaaTgFEUbEZJk1fojwFlGoMImCx2oxleAZ7efLUXOE4V1lVXVNLyyQSmbpk+PqGSmcj942rqZkRM7ScP5ZgNbsvXER7rbW6NpHQtns6hEtcMnaSaEvp7ejydScJO+NXBBDQ08siWcEaCwz1EZjUfk7CQP5x1lw1hIOeviHsNmE4OBwRlkrfCIdnt5SOYsTlK2NOYeWMdvEJr457W6WA3DYRQRJAmfEaL2lS2ePQSomq6zFBl3Jqmge6ZtjZfpcEmJu/UeLhO+H0CrVfAGRJ9qKEWLoJ6OZOAJZXEGC5lQboFQ0jISgWkE2rwB9HGqya2xRrryhew+4CqPU7ZcNCZe/GZMB/T7+xiRNk5ZZRaM79qV4AmBBUPcCJbp+jXiBQx3wGWIDXFCjCagEYyOQ8YgQWPmQxgFXFo9s8oH7EuxkQBsZxgnwsd/Jj9GQHlXgXQnfKpLIUkWXjIkygdj0NQOsegRPAFKx7Bg3Ddj505LkFmmNsCpHoaNiCwgDkveAKt/8yBXCWR5eLKpZRNOYVV3gd/hpA+ut5l9/7BnXTGedKWz+GA67wAcMext9W8+1s5wdf9w4D1t6HgtTQBzuRWCeA9iNfFpVMCnzyBFaFVWuCHgqhyn7GiuULLRw/DTqL+YKAr1iOWdtO5CRdUww9HPO65JydOfq2eeIsGXVoRNz5EuLwuzsiOjY0hT9+ijrZX/s5dNKT123Y+Pfv7RVF2tt+S2a+L0Gkh6D+IJhsCduzO+miRGK0ERBRuL0n/ueUYU1CAqCP9mDbnOhGj1YbcQCQKqiQtH06F6Qa6fgjdf+mRgCmOR824YupAKBLscH5B+jHltOifUPRAAAAAElFTkSuQmCC';
  public shadowSize: Point = new Point(30, 30);
  public shadowAnchor: Point = new Point(-1, 30);

  markers = []

  constructor(private flagService: FlagSevice) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    })
    this.flagService.getAllFlags().subscribe(flags => { console.log(flags); this.markers = <any>flags });
  }


}
