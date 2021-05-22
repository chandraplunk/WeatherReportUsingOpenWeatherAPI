import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {
  finalReport: any;
  cityName: string;
  constructor(private route: ActivatedRoute, private weatherReport: WeatherService) { }

  ngOnInit(): void {
    this.route.params.subscribe((cityName: any) => {
      this.cityName = cityName.cityName;
      this.getweatherReport(this.cityName);
    });
  }

  //getweatherReport method is used to fetch city weather report API and assign values
  getweatherReport(cityName: any): void {
    this.weatherReport.fetchcityWeatherReport(cityName).subscribe((reports: any) => {
      this.finalReport = reports.list.filter((element: any) => {
        return element.dt_txt.includes("09:00:00");
      });
      this.finalReport.map((data: any) => {
        const date = new Date(data.dt * 1000);
        return data.date = date.toLocaleDateString('pt-PT');
      })
    });
  }
}
