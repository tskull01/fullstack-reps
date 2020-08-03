import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import League from './classes/league';
import Competitor from './classes/competitor';

@Injectable({
  providedIn: 'root',
})
export class CurrentService {
  currentLeague: BehaviorSubject<League>;
  currentUser: BehaviorSubject<Competitor>;
  constructor() {}
  setCurrentLeague(league: League) {
    if (this.currentLeague) {
      this.currentLeague.next(league);
    } else {
      this.currentLeague = new BehaviorSubject<League>(league);
    }
  }
  setCurrentUser(competitor: Competitor) {
    if (this.currentUser) {
      this.currentUser.next(competitor);
    } else {
      this.currentUser = new BehaviorSubject<Competitor>(competitor);
    }
  }
}
