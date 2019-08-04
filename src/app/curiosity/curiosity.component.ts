import { Component, OnInit } from '@angular/core';
import { Curiosity } from '../curiosity';
import { CuriosityService } from '../curiosity.service';

@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.sass']
})
export class CuriosityComponent implements OnInit {

  curiosities: Curiosity[];

  constructor(
    private curiosityService: CuriosityService,
  ) { }

  ngOnInit() {
    this.getCuriosity();
  }

  getCuriosity(): void{
    this.curiosityService.getCuriosities()
    .subscribe(curiosities => this.curiosities = curiosities);
  }

}
