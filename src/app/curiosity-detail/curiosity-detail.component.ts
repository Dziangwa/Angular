import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

import { Curiosity } from '../curiosity';
import { CuriosityService } from '../curiosity.service';

@Component({
  selector: 'app-curiosity-detail',
  templateUrl: './curiosity-detail.component.html',
  styleUrls: ['./curiosity-detail.component.sass']
})
export class CuriosityDetailComponent implements OnInit {

  @Input() curiosity: Curiosity;
  @Input() leng: number;

  constructor(
    private curiosityService: CuriosityService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getCuriosity();
    this.getLength();
  }

  getCuriosity(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.curiosityService.getCuriosity(id)
      .subscribe(curiosity => this.curiosity = curiosity);
  }

  getLength(): void{
    this.curiosityService.getCuriosities()
      .subscribe(curiosities => this.leng = curiosities.length);
  }

  move():void{
    this.getCuriosity();
  }
}
