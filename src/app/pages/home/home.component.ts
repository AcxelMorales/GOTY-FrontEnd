import { Component, OnInit, OnDestroy } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { IGame } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {

  games: { name: string, value: number }[] = [];
  gamesSubscription: Subscription =  new Subscription();

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.gamesSubscription = this.db.collection('goty').valueChanges().pipe(
      map((resp: IGame[]) => resp.map(({ name, votes }) => ({ name, value: votes })))
    ).subscribe(gamesDB => this.games = gamesDB);
  }

  ngOnDestroy(): void {
    this.gamesSubscription.unsubscribe();
  }

}
