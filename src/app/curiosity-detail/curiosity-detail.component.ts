import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

import { Curiosity } from '../curiosity';
import { CuriosityService } from '../curiosity.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-curiosity-detail',
  templateUrl: './curiosity-detail.component.html',
  styleUrls: ['./curiosity-detail.component.css']
})
export class CuriosityDetailComponent implements OnInit {

  @Input() curiosity: Curiosity;

  constructor(
    private curiosityService: CuriosityService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getCuriosity();
  }

  getCuriosity(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.curiosityService.getCuriosity(id)
      .subscribe(curiosity => this.curiosity = curiosity);
  }

  move():void{
    this.getCuriosity();
  }
}
