import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'; 

@Component({
  selector: 'app-observers',
  templateUrl: './observers.component.html',
  styleUrls: ['./observers.component.css']
})
export class ObserversComponent implements OnInit {

  tmp = "Nothing happened";
  tmp2 = "";
  navStart: Observable<NavigationStart>;

  visible = true;
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
   }

  ngOnInit() {
    this.navStart.subscribe(evt => this.tmp = "Navigation started");
    this.activatedRoute.url.subscribe(url => this.tmp2='The Url changed to: ' + url);
  }

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
}
