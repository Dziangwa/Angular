import { Component, OnInit } from '@angular/core';
import { trigger, state, style,animate,transition } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('openClose', [
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow',
    })),
    state('closed', style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green',
    })),
    transition('closed <=> open', [
      animate('0.5s'),
    ]),
  ])
  ],
})
export class AnimationsComponent implements OnInit {

  isOpen = true;

  toggle(){
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
