import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import Swal from 'sweetalert2';

import { FirebaseService } from '../../services/firebase.service';
import { IGame, IResp } from '../../interfaces/interfaces';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styles: []
})
export class GotyComponent implements OnInit, OnDestroy {

  games: IGame[] = [];
  okLoading: boolean = false;
  getSubscription: Subscription = new Subscription();

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.getSubscription = this._firebaseService.getNominees().subscribe(games => {
      setTimeout(() => {
        this.okLoading = true;
        this.games = games;
      }, 1500);
    });
  }

  onVote(game: IGame): void {
    this._firebaseService.vote(game.id).subscribe((resp: IResp) => {
      if (resp.ok) {
        Swal.fire({
          title: 'OK!',
          text: resp.message,
          icon: 'success'
        });
      } else {
        Swal.fire({
          title: 'Opss!',
          text: resp.message,
          icon: 'error'
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.getSubscription.unsubscribe();
  }

}
