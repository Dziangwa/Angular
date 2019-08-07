import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { trigger, state, style,animate,transition } from '@angular/animations';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations: [
    trigger('flyInOut',[
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  hero: Hero;
  tmp = 'Nothing';

  constructor(private heroService: HeroService) {

   }

   getHeroes(): void{
     this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
   }

  ngOnInit() {
    this.getHeroes();
  }

  add(name: string): void{
    name = name.trim();
    if(!name) {return;}
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      },
      err => console.error('Observer got an error'),
      () => this.tmp = "Observer got a notify",)
  }

  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
