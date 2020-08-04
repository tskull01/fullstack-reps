import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import League from './classes/league';
import Competitor from './classes/competitor';

@Injectable({
  providedIn: 'root',
})
export class CurrentService {
  currentLeague: BehaviorSubject<League> = new BehaviorSubject(null);
  currentUser: BehaviorSubject<Competitor> = new BehaviorSubject(null);
  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}
  setCurrentLeague(league: League) {
    if (this.currentLeague) {
      this.currentLeague.next(league);
    } else {
      this.currentLeague = new BehaviorSubject<League>(league);
    }
  }
  setCurrentUser(competitor: Competitor) {
    if (competitor._id)
      if (this.currentUser) {
        this.currentUser.next(competitor);
      } else {
        this.currentUser = new BehaviorSubject<Competitor>(competitor);
      }
  }
}
