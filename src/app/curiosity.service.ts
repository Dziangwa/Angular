import { Injectable } from '@angular/core';
import { Curiosity } from './curiosity';
import { CURIOSITIES } from './mock-curiosity';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CuriosityService {

  private curiosityUrl = 'api/curiosities'

  constructor(
    private http: HttpClient,
  ) { }

  getCuriosities(): Observable<Curiosity[]>{
    return this.http.get<Curiosity[]>(this.curiosityUrl)
      .pipe(
        catchError(this.handleError<Curiosity[]>('getCuriosities', []))
      )
  }

  getCuriosity(id: number): Observable<Curiosity>{
    const url = `${this.curiosityUrl}/${id}`;
    return this.http.get<Curiosity>(url).pipe(
      catchError(this.handleError<Curiosity>(`getCuriosity id=${id}`))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
