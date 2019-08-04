import { Injectable } from '@angular/core';
import { Curiosity } from './curiosity';
import { CURIOSITIES } from './mock-curiosity';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuriosityService {

  constructor() { }

  getCuriosities(id: number): Curiosity[]{
    return CURIOSITIES;
  }

  getCuriosity(id: number): Observable<Curiosity>{
    return of(CURIOSITIES.find(curiosity => curiosity.id === id));
  }
}
