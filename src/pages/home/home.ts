import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	weather:any;
	location:{
		city:string,
		plz:string
	}

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider) {

  }

  ionViewWillEnter(){
  	this.location = {
  		city: 'AT',
  		plz: '6890'
  	}

  	this.weatherProvider.getWeather(this.location.plz, this.location.city)
  	.subscribe(weather => {
  		this.weather = weather;
  	});
  }
}
