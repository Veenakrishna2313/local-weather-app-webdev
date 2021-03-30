import { Component, Input, OnInit} from '@angular/core';
import {ICurrentWeather} from '../icurrent-weather';
import { using } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() current:ICurrentWeather
  
  constructor() {
      
   }

  ngOnInit(): void {

    
  }

}
