import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  cities = [
    {
      name: 'London',
      temperature: '',
      sunRiseTime: '',
      sunSetTime: ''
    },
    {
      name: 'Paris',
      temperature: '',
      sunRiseTime: '',
      sunSetTime: ''
    },
    {
      name: 'Barcelona',
      temperature: '',
      sunRiseTime: '',
      sunSetTime: ''
    },
    {
      name: 'Madrid',
      temperature: '',
      sunRiseTime: '',
      sunSetTime: ''
    },
    {
      name: 'Dublin',
      temperature: '',
      sunRiseTime: '',
      sunSetTime: ''
    }];

  constructor(private http: HttpClient, private router: Router, private weatherReport: WeatherService) { }

  ngOnInit() {
    this.getCitiesReport();
  }

  // timeConverter method is used to convert the value into 12hrs time zone
  timeConverter(value: number): any {
    return new Date(value * 1000).toLocaleTimeString();
  }

  //navigate method is used navigate the next page when user click on any city
  navigate(city: any): void {
    this.router.navigate(['weatherReport', city.name]);
  }

  //getCitiesReport method is used to fetch 5 cities weather report API and assign values
  getCitiesReport(): void {
    this.weatherReport.fetchCitiesWeatherReport().subscribe((result: any) => {
      result.forEach((element: any, index: number) => {
        this.cities[index].sunRiseTime = this.timeConverter(element.sys.sunrise);
        this.cities[index].sunSetTime = this.timeConverter(element.sys.sunset);
        this.cities[index].temperature = element.main.temp;
      });
    });
  }
}
