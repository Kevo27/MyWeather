import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = 'e0e1c48b7d2e4af5bf0135306172311';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.apixu.com/v1/current.json?key=' +this.apiKey+ '&q=';
  }

  getWeather(plz, state){
  	return this.http.get(this.url + state + ' ' + plz)
  	.map(res => res.json());
  }

}
