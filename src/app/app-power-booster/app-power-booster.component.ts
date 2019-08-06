import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-power-booster',
  templateUrl: './app-power-booster.component.html',
  styleUrls: ['./app-power-booster.component.css']
})
export class AppPowerBoosterComponent implements OnInit {

  power = 0;
  factor = 0;

  constructor() { }

  ngOnInit() {
  }

}
