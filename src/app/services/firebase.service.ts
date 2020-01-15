import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { IGame } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private games: IGame[] = [];

  constructor(private http: HttpClient) { }

  getNominees(): Observable<IGame[]> {
    if (this.games.length > 0) {
      return of(this.games);
    } else {
      return this.http.get<IGame[]>(`${environment.firebaseUrlService}/api/goty`).pipe(
        tap(games => this.games = games)
      );
    }
  }

  vote(id: string): Observable<Object> {
    return this.http.post(`${environment.firebaseUrlService}/api/goty/${id}`, {}).pipe(
      catchError(err =>  of(err.error))
    );
  }

}
