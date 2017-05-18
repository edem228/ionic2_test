import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  location:any;
  platform:any;
  constructor(public navCtrl: NavController, private geolocation: Geolocation, platform: Platform) {
    this.platform = platform
    platform.ready().then(() => {

      // get current position
      geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // to stop watching
      watch.unsubscribe();

    });

    }
  }
//   onLocateUser() {
//     Geolocation.getCurrentPosition()
//       .then(
//       (location) => {
//         console.log('Location successful')
//         this.location.lat = location.coords.latitude;
//         this.location.lng = location.coords.longitude;
//       }
//       )
//     }
// }
