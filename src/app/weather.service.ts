import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError ,observable, catchError} from 'rxjs';
import { GetCitiesResponse, GetCountriesResponse } from './models/country';
import { Weather } from './models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCountries() {
    const path = 'https://countriesnow.space/api/v0.1/countries';
   return this.http.get<GetCountriesResponse>(path).pipe(
        catchError(this.handleError)
      );
    
  }
  getCitiesForOneCountry(country: string) {
    const path = 'https://countriesnow.space/api/v0.1/countries/cities';
    const body = { "country": country };
   return this.http.post<GetCitiesResponse>(path, body).pipe(
      catchError(this.handleError)
    );
  }
  getWeatherForCity(city: string) {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
   return this.http.get<Weather>(path).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${JSON.stringify(error.error) }`);
    }
    // return an observable with a user-facing error message
    return throwError(()=>'Something bad happened. Please try again later.');
  }
}
