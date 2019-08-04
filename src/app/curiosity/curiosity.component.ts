import { Component, OnInit } from '@angular/core';
import { Curiosity } from '../curiosity';
import { CuriosityService } from '../curiosity.service';

@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.css']
})
export class CuriosityComponent implements OnInit {

  curiosities: Curiosity[] = [];

  constructor(
    private curiosityService: CuriosityService,
  ) { }

  ngOnInit() {
  this.curiosities = this.curiosityService.getCuriosities();
  }



}
