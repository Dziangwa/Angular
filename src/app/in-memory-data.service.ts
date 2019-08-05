import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const curiosities = [
      {id: 1, text: 'Każdy koci nos jest tak unikalny, jak linie papilarne u człowieka.'},
      {id: 2, text: 'Prawie 10% wszystkich kości kota znajduje się w jego ogonie.'},
      {id: 3, text: 'Koty nie mają obojczyka. Ten "brak" sprawia, że mogą wciskać się we wszystkie szczeliny, przez które może przejść ich głowa.'},
      {id: 4, text: 'Kot spędza ok 2/3 doby na drzemce. Oznacza to, że dziewięcioletni kot przespał całe sześć lat swojego życia.'},
      {id: 5, text: 'Kot nie widzi tego, co znajduje się bezpośrednio przed jego nosem. Dlatego często nie może znaleźć małych kawałeczków (np. jedzenia) na podłodze.'},
      {id: 6, text: 'Koty wydają z siebie ok. 100 różnych dźwięków, psy tylko ok. 10.'},
      {id: 7, text: 'Najstarszy grobowiec z oswojonym kotem został znaleziony na Cyprze i jest starszy od egipskich malowideł przedstawiających koty o ok 4 tyś. lat.'},
      {id: 8, text: 'Koty nie rozpoznają słodkiego smaku.'},
    ];
    const customers = [
      {id: 1, name: "John"},
      {id: 2, name: "Sally"},
      {id: 3, name: "Tom"},
      {id: 4, name: "Brian"},
      {id: 5, name: "Jessica"},
      {id: 6, name: "Mike"},
    ]
    return {heroes, curiosities, customers};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}