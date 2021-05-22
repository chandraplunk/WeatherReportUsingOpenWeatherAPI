import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

// describe('WeatherService', () => {
//   let service: WeatherService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(WeatherService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('TimeSlotService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: WeatherService }
    ]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
});
