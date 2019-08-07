import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  templateUrl: './hero-birthday.component.html',
  styleUrls: ['./hero-birthday.component.css']
})
export class HeroBirthdayComponent implements OnInit {

  birthday = new Date(1988, 3, 15);
  toggle = true;

  constructor() { }

  ngOnInit() {
  }

  get format() { return this.toggle ? 'shortDate' : 'fullDate';}

  toggleFormat(){
    this.toggle = !this.toggle;
  }

  
}
