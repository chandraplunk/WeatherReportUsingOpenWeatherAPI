import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'weatherReport/:cityName',component:WeatherReportComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WeatherReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
