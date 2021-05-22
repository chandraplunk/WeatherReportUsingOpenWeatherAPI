import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private fiveDaysReportsUrl: string = 'http://api.openweathermap.org/data/2.5/forecast?q='
  private reportUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private key: string = '&appid=53333a4d21b09458165798801ee2a74e';

  constructor(private http: HttpClient) { }

  fetchcityWeatherReport(city: any) {
    return this.http.get(this.fiveDaysReportsUrl + city + this.key);
  }

  fetchCitiesWeatherReport() {
    const londonWeather = this.http.get(this.reportUrl + 'London,uk' + this.key);
    const parisWeather = this.http.get(this.reportUrl + 'paris,fr=' + this.key);
    const barcelonaWeather = this.http.get(this.reportUrl + 'Barcelona,es=' + this.key);
    const madridWeather = this.http.get(this.reportUrl + 'Madrid,es=' + this.key);
    const dublinWeather = this.http.get(this.reportUrl + 'Dublin,isk=' + this.key);
    return forkJoin([londonWeather, parisWeather, barcelonaWeather, madridWeather, dublinWeather]);
  }
}
