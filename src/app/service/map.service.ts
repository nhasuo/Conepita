import { Injectable } from '@angular/core';
import { async, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  //   getReverseGeo(lat: number, lng: number): string {
  //     const latlng = {
  //       lat: lat,
  //       lng: lng,
  //     };
  //     const geocoder = new google.maps.Geocoder();
  //     let addres: string;
  //      geocoder
  //       .geocode({ location: latlng })
  //       .then((response) => {
  //         addres = response.results[0].formatted_address.substr(13);
  //         console.log(addres);
  //       })
  //       .catch((e) => {
  //         console.log('Geocoder failed due to: ' + e);
  //       });
  //     return addres;
  //   }

  constructor() {}
}
