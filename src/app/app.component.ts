import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Weather } from './models/weather';
import { WeatherService } from './weather.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  cities: string[] = [];
  selectedCountry = '';
  selectedCity = '';
  selectedCityWeather = new Weather();
  today = '';
  countries: string[] = [];
  countryCities: string[] = [];

  constructor(private http: HttpClient, private weatherService: WeatherService) {
    this.today = formatDate(new Date(), 'dd  MMM  yy', 'en');
  }

  ngOnInit() {
    this.getCountries();
  }

  changeSelectedCity() {
    this.selectedCityWeather = new Weather();
    this.getWeatherForCity(this.selectedCity);
  }

  getCountries(): string[] {
    this.weatherService.getCountries().subscribe(
      res => {
        this.countries = res.data.map((c => c.country));
      }
    );
    return this.countries;
  }

  changeSelectedCountry() {
    this.countryCities = [];
    this.selectedCity = '';
    this.selectedCityWeather = new Weather();
    this.weatherService.getCitiesForOneCountry(this.selectedCountry).subscribe(
      res => {
        this.countryCities = res.data;
        this.selectedCity = this.countryCities[0];
        this.changeSelectedCity();
      }
    )
    return this.countryCities;
  }


  getWeatherForCity(city: string) {
    this.weatherService.getWeatherForCity(city).subscribe((res) => {
      this.selectedCityWeather = res;
    }
    );
  }

}

